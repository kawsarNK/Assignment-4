// --- State Management ---
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-filter-btn';

// --- DOM Elements ---
const total = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
const availableCount = document.getElementById('available-count');

const mainContainer = document.querySelector('section');
const allCardSection = document.getElementById('all-cards');
const filterSection = document.getElementById('filtered-section');
const emptyState = document.getElementById('empty-state');


// --- Initialization ---
calculateCount();


function calculateCount() {
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;


    if (currentStatus === 'all-filter-btn') {
        // availableCount.innerText = `${allCardSection.children.length} jobs`;
        availableCount.innerText = `${total.innerText} jobs`;

    }

    else if (currentStatus === 'interview-filter-btn') {
        availableCount.innerText = `${interviewList.length} of ${total.innerText} jobs`;


    }
    else if (currentStatus === 'rejected-filter-btn') {
        availableCount.innerText = `${rejectedList.length} of ${total.innerText} jobs`;

    }

}


//   Handles UI tab switching and triggers rendering for filtered views.


function toggleStyle(id) {
    const buttons = document.querySelectorAll('.filter-btn');
    const selected = document.getElementById(id);
    currentStatus = id;

    // 1. Reset button styles
    buttons.forEach(btn => {
        btn.classList.remove('bg-blue-800', 'text-white');
        btn.classList.add('bg-white', 'text-gray-500');
    });
    if (selected) {
        selected.classList.remove('bg-white', 'text-gray-500');
        selected.classList.add('bg-blue-800', 'text-white');
    }

    // 2. Always hide empty state by default when switching
    emptyState.classList.add('hidden');

    // 3. Handle Filtering Logic
    if (id === 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        calculateCount();

        if (interviewList.length === 0) {
            emptyState.classList.remove('hidden');
        }
        renderInterview();

    } else if (id === 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
        calculateCount();
        // No empty state check here usually, as "All" typically has the initial cards

    } else if (id === 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        calculateCount();
        // console.log(rejectedList.length);
        // Corrected check to look at rejectedList.length
        if (rejectedList.length === 0) {
            // 
            emptyState.classList.remove('hidden');
        }
        renderRejected();
    }
}

// --- Event Delegation ---

mainContainer.addEventListener('click', function (event) {
    const card = event.target.closest('.card');
    if (!card) return;

    // Extracting data from the card
    const companyName = card.querySelector('.job-company-name').innerText;
    const jobTitle = card.querySelector('.job-title').innerText;
    const jobInfo = card.querySelector('.job-info').innerText;
    const jobDescription = card.querySelector('.job-descrition').innerText;

    // --- Handle Interview Button Click ---
    if (event.target.closest('.interview-btn')) {
        card.querySelector('.job-status').innerText = 'INTERVIEW';
        const cardInfo = { companyName, jobTitle, jobInfo, status: 'INTERVIEW', jobDescription };

        // Prevent duplicates
        if (!interviewList.find(item => item.companyName === companyName)) {
            interviewList.push(cardInfo);
        }

        // Remove from rejected list if it exists there
        rejectedList = rejectedList.filter(item => item.companyName !== companyName);

        if (currentStatus === 'rejected-filter-btn') renderRejected();
        calculateCount();
    }

    // --- Handle Rejected Button Click ---
    else if (event.target.closest('.rejected-btn')) {
        card.querySelector('.job-status').innerText = 'REJECTED';
        const cardInfo = { companyName, jobTitle, jobInfo, status: 'REJECTED', jobDescription };

        if (!rejectedList.find(item => item.companyName === companyName)) {
            rejectedList.push(cardInfo);
        }

        // Remove from interview list if it exists there
        interviewList = interviewList.filter(item => item.companyName !== companyName);

        if (currentStatus === 'interview-filter-btn') renderInterview();
        calculateCount();
    }
    // --- Handle Delete Button Click ---
    else if (event.target.closest('.delete-btn')) {

        const card = event.target.closest('.card');
        const companyName = card.querySelector('.job-company-name').innerText;

        // Remove from DOM
        card.remove();

        // Remove from arrays
        interviewList = interviewList.filter(item => item.companyName !== companyName);
        rejectedList = rejectedList.filter(item => item.companyName !== companyName);

        // Re-render current filter
        if (currentStatus === 'interview-filter-btn') {
            renderInterview();
        }
        else if (currentStatus === 'rejected-filter-btn') {
            renderRejected();
        }

        calculateCount();
    }


});


//   Generates HTML for a job card

function createCardHTML(job) {
    return `
        <div class="card bg-base-100 shadow-sm border border-base-200 p-6 mb-4">
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="job-company-name text-xl font-bold text-blue-900 mb-2">${job.companyName}</h3>
                    <p class="job-title text-gray-500 font-medium">${job.jobTitle}</p>
                </div>
                <button class="btn btn-circle btn-ghost btn-sm border border-gray-100 p-2">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
            <div class="job-info flex gap-2 text-sm text-gray-500 my-4">${job.jobInfo}</div>
            <div class="job-status w-max badge rounded-md p-3 py-4 bg-blue-50 text-blue-900 font-bold border-none text-xs">
                ${job.status}
            </div>
            <p class="job-descrition text-gray-600 text-sm mt-2">${job.jobDescription}</p>
            <div class="card-actions mt-4 gap-3">
                <button class="btn btn-outline btn-success btn-sm px-6 interview-btn">INTERVIEW</button>
                <button class="btn btn-outline btn-error btn-sm px-6 rejected-btn">REJECTED</button>
            </div>
        </div>`;
}

function renderInterview() {
    filterSection.innerHTML = '';
    interviewList.forEach(job => {
        let div = document.createElement('div');
        div.className = 'newCard';
        div.innerHTML = createCardHTML(job);
        filterSection.appendChild(div);
    });
}

function renderRejected() {
    filterSection.innerHTML = '';
    rejectedList.forEach(job => {
        let div = document.createElement('div');
        div.className = 'newCard';
        div.innerHTML = createCardHTML(job);
        filterSection.appendChild(div);
    });
}
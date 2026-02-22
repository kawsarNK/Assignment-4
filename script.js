//event of interview button
const btnInterviewInput = document.getElementById("btn-interview").addEventListener("click", function () {
    // console.log("button clicked");

    // fetch data of interview count
    const interviewCountElement = document.getElementById("Interview-count");
    const interviewCount = interviewCountElement.innerText;

    // 2. Convert the current text to an actual Number
    let currentCount = parseInt(interviewCountElement.innerText);

    // 3. Increment the count
    currentCount++;

    // 4. Set the new data back into the element's innerText
    interviewCountElement.innerText = currentCount;

    //5.change the badge data
    const statusBadge = document.getElementById("status-badge");
    statusBadge.innerText = "INTERVIEW";
    statusBadge.classList.replace("bg-blue-50", "bg-green-50");

})



//event of Rejected button
const btnRejectedInput = document.getElementById("btn-rejected").addEventListener("click", function () {
    // console.log("button clicked");


    // fetch data of interview count
    const interviewCountElement = document.getElementById("Interview-count");
    const interviewCount = interviewCountElement.innerText;

    // 2. Convert the current text to an actual Number
    let currentCount = parseInt(interviewCountElement.innerText);

    // 3. decrement the count
    if (currentCount > 0) {
        currentCount--;
    }

    // 4. Set the new data back into the element's innerText
    interviewCountElement.innerText = currentCount;

    //5.change the badge data
    const statusBadge = document.getElementById("status-badge");
    statusBadge.innerText = "NOT APPLIED";
    statusBadge.classList.replace("bg-green-50", "bg-blue-50");
})







//event of delete button
const btnDeleteInput = document.getElementById("btn-delete").addEventListener("click", function () {

})


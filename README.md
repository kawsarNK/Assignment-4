# 💼 Job Application Tracker

A dedicated dashboard designed to help developers organize their career hustle. This application allows you to track job applications, manage interview stages, and keep notes on companies all in one place.

<img width="1836" height="864" alt="image" src="https://github.com/user-attachments/assets/0f7d01ff-181f-493b-8cf1-dbccf8d71241" />


## 🚀 Live Demo
(https://kawsarnk.github.io/Assignment-4/)

## ✨ Core Features
- **Application Management:** Add, edit, and delete job applications.
- **Status Tracking:** Categorize jobs into stages: *Applied, Interviewing, Offered, or Rejected*.
- **Priority Marking:** Highlight "Dream Companies" or high-priority applications.
- **Detailed Logs:** Save job descriptions, salary ranges, and contact person details.

## 💻 Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **UI Components:** DaisyUI
- **State Management:** React Hooks (useState, useEffect)
- **Icons:** React Icons / FontAwesome

## 🛠️ Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/kawsarNK/Assignment-4

## 🧠 Development Highlights
Building this project over three days taught me several key concepts:

- **Local Storage Integration:** Persisting user data so applications aren't lost on page refresh.

- **Conditional Rendering:** Dynamically changing UI elements based on the application status (e.g., green for 'Offered', red for 'Rejected').

- **Component Reusability:** Creating modular React components for the job cards and input forms to keep the code DRY (Don't Repeat Yourself).

## 📈 Future Improvements
1. Add a "Statistics" dashboard to see application success rates.

2. Integration with a backend (Node.js/MongoDB) for user accounts.

3. Email reminder system for upcoming interviews.

**Built with persistence by Kawsar Hamid**













1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
  **Ans :** getElementById is single selector and return only signle elements.Most of the case we use it.
  getElementsByClassName selects all elements with a given class name.It's returns multiple element of HTML collection.
  querySelector selects the first matching element and returns always first match element.
  querySelectorAll selects all matching elements and returns a NodeList.

2. How do you create and insert a new element into the DOM?
   **Ans :** To Create the specific element use document.createElement(),in bracket put the name of that specific element.
   To insert 1st need to select the parent element, Like : const container = document.getElementById("container");
   after that append it as a child, container.appendChild("elementName);

3. What is Event Bubbling? And how does it work?
  **Ans :** Event bubbling is when a event occurs in any element it started from there and then its bubbles up by it's parents chain.It works through this parents chain.

4. What is Event Delegation in JavaScript? Why is it useful?
  **Ans :** Event delegation is a technique where we can attach one event listener to a parent Handle events for multiple child elements using bubbling.It is usefull beacuse it  Works with dynamically added elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
   **Ans :** preventDefault() Stops the default browser behavior,does NOT stop bubbling.
   stopPropagation() Stops the event from bubbling up to parent elements,does NOT stop default behavior.

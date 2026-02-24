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

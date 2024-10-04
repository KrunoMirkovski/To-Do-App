//*This script manages a simple to-do list that allows users to add tasks, mark tasks as done, and remove tasks. The data is stored in the browser's localStorage to persist even when the page is reloaded.

// Get references to the input field and list wrapper elements from the HTML
const inputBox = document.getElementById("input_box");
const listWrap = document.getElementById("list_wrap");

// Function to add a new task to the list
function addTask() {
  // Check if the input field is empty
  if (inputBox.value === "") {
    alert("You have to write text");
  } else {
    // Create a new <li> (list item) element
    let li = document.createElement("li");
    li.innerHTML = inputBox.value; // Set the content of the <li> to the input value
    listWrap.appendChild(li); // Append the new <li> to the task list

    // Create a span element to act as a delete button
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Set the span's content to the '×' character (Unicode symbol)
    li.appendChild(span); // Append the span to the list item
  }

  // Clear the input field after the task has been added
  inputBox.value = "";

  // Save the updated list data to localStorage
  saveData();
}

// Add an event listener to the list wrapper (parent element of all tasks)
listWrap.addEventListener(
  "click",
  function (e) {
    // Check if the clicked element is a <li> (task item)
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked"); // Toggle the 'checked' class to mark/unmark the task as done
      saveData(); // Save the updated state to localStorage
    }
    // Check if the clicked element is a <span> (delete button)
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); // Remove the parent <li> (task item)
      saveData(); // Save the updated list to localStorage
    }
  },
  false
);

// Function to save the current list data to localStorage
function saveData() {
  localStorage.setItem("data", listWrap.innerHTML); // Save the entire inner HTML of the list
}

// Function to retrieve and display saved tasks from localStorage when the page loads
function showTasks() {
  listWrap.innerHTML = localStorage.getItem("data"); // Set the list's HTML to the saved value
}

// Immediately call showTasks() to display the saved tasks on page load
showTasks();

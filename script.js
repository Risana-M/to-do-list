//Dom Elements

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList")


//Add Task 

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // create list items

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center w-100";

  //create span for task text

  const span = document.createElement("span");
  span.textContent = taskText;


  //create edit button 

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "btn btn-sm btn-warning me-2";


  //create delete button 

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "btn btn-sm btn-danger";

  // Button container

  const btnDiv = document.createElement("div");
  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(delBtn);

  //append elemnts

  li.appendChild(span);
  li.appendChild(document.createElement("div")).append(editBtn, delBtn);
  taskList.appendChild(li);


  //clear input

  taskInput.value = "";

  // Toggle complete on click

  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // Edit task

  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  });

  // Delete single task

  delBtn.addEventListener("click", () => {
    li.remove();
  });
});






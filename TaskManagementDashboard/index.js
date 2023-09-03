const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const filterSelect = document.getElementById("filterSelect");
const taskList = document.getElementById("taskList");

let tasks = [];

function renderTasks() {
  taskList.innerHTML = "";
  const selectedFilter = filterSelect.value;

  tasks.forEach((task, index) => {
    if (selectedFilter === "all" || (selectedFilter === "active" && !task.completed) || (selectedFilter === "completed" && task.completed)) {
      const taskItem = document.createElement("li");
      taskItem.className = "task-item";
      taskItem.innerHTML = `
        <span class="${task.completed ? 'task-completed' : ''}">${task.description}</span>
        <button data-index="${index}">${task.completed ? 'Uncomplete' : 'Complete'}</button>
      `;
      taskList.appendChild(taskItem);
    }
  });

  const toggleButtons = taskList.querySelectorAll("button");
  toggleButtons.forEach(button => {
    button.addEventListener("click", function() {
      const index = parseInt(button.getAttribute("data-index"));
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    });
  });
}

addTaskBtn.addEventListener("click", function() {
  const description = taskInput.value.trim();
  if (description !== "") {
    tasks.push({ description, completed: false });
    renderTasks();
    taskInput.value = "";
  }
});

filterSelect.addEventListener("change", renderTasks);

// Initial rendering
renderTasks();

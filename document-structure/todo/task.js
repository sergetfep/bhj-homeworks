const tasksForm = document.getElementById("tasks__form");
const tasksInput = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");

function createTask(title) {
  const task = document.createElement("div");
  task.className = "task";

  const taskTitle = document.createElement("div");
  taskTitle.className = "task__title";
  taskTitle.textContent = title;

  const removeBtn = document.createElement("a");
  removeBtn.className = "task__remove";
  removeBtn.href = "#";
  removeBtn.textContent = "×";

  removeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    tasksList.removeChild(task);
  });

  task.appendChild(taskTitle);
  task.appendChild(removeBtn);

  return task;
}

tasksForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = tasksInput.value.trim();
  if (title !== "") {
    const task = createTask(title);
    tasksList.appendChild(task);
    tasksInput.value = "";
  }
});

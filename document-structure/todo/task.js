const tasksForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

function createTask(taskText) {
  const task = document.createElement('div');
  task.className = 'task';

  const taskTitle = document.createElement('div');
  taskTitle.className = 'task__title';
  taskTitle.textContent = taskText;

  const taskRemove = document.createElement('a');
  taskRemove.className = 'task__remove';
  taskRemove.href = '#';
  taskRemove.innerHTML = '&times;';

  taskRemove.addEventListener('click', function (event) {
    event.preventDefault();
    task.remove();
  });

  task.appendChild(taskTitle);
  task.appendChild(taskRemove);

  tasksList.appendChild(task);
}

tasksForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    createTask(taskText);

    taskInput.value = '';
  }
});
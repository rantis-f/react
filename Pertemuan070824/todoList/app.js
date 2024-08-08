import { TodoList } from './todo.js';

const todoList = new TodoList();
const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');

const displayTasks = () => {
    taskList.innerHTML = '';
    todoList.tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task.description;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
            todoList.removeTask(index);
            displayTasks();
        };

        taskItem.append(taskText, deleteBtn);
        taskList.appendChild(taskItem);
    });
};

const addTask = () => {
    const description = taskInput.value.trim();
    if (description) {
        todoList.addTask(description);
        taskInput.value = '';
        displayTasks();
    }
};

addTaskBtn.addEventListener('click', addTask);

displayTasks(); 

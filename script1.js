const todoList = document.getElementById('todo-list');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');

let tasks = [];

function renderTasks() {
    todoList.innerHTML = '';
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = task.text;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            renderTasks();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            tasks = tasks.filter((t) => t !== task);
            renderTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(' '));
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
});

renderTasks();
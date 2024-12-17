document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const taskDatetime = document.getElementById('task-datetime');
    const taskList = document.getElementById('task-list');

    // Add Task
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = taskInput.value;
        const taskTime = taskDatetime.value;

        if (taskText && taskTime) {
            addTask(taskText, taskTime);
            form.reset();
        }
    });

    // Add Task Function
    function addTask(text, datetime) {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        const taskContent = document.createElement('div');
        taskContent.innerHTML = `<strong>${text}</strong><br><small>${new Date(datetime).toLocaleString()}</small>`;
        
        const actions = document.createElement('div');

        // Complete Button
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        // Edit Button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            const newTask = prompt('Edit Task:', text);
            const newDatetime = prompt('Edit Date and Time:', datetime);
            if (newTask && newDatetime) {
                taskContent.innerHTML = `<strong>${newTask}</strong><br><small>${new Date(newDatetime).toLocaleString()}</small>`;
            }
        });

        // Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        actions.appendChild(completeBtn);
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        listItem.appendChild(taskContent);
        listItem.appendChild(actions);

        taskList.appendChild(listItem);
    }
});
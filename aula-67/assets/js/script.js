const addButton = document.querySelector('.container button');
const toDoInput = document.querySelector('.container input');
const wrapper = document.querySelector('.wrapper');

// Criar Task clicando no botão
addButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (!toDoInput.value) {
        alert('Preencha o Campo Corretamente!');
        return;
    }

    createTask(toDoInput.value);
    clearInput();
    saveTasks();
})

// Criar Task apertando enter
toDoInput.addEventListener('keypress', (e) => {

    if (e.keyCode === 13) {

        if (!toDoInput.value) {
            alert('Preencha o Campo Corretamente!');
            return;
        }

        createTask(toDoInput.value);
        clearInput();
        saveTasks();
    }

})

// // Deletar Task
document.addEventListener('click', (e) => {
    deleteTask(e.target);
    saveTasks();
})


function clearInput(){
    toDoInput.value = '';
    toDoInput.focus();
}

function createTask (msg){
    const taskWrapper = document.createElement('article');
    taskWrapper.classList.add('task-container');
    taskWrapper.classList.add('neuromorphic-shadows');

    const checkbox = createCheckbox();

    const task = createTaskText(msg);

    const deleteButton = createDeleteButton();
    
    taskWrapper.appendChild(checkbox);
    taskWrapper.appendChild(task);
    taskWrapper.appendChild(deleteButton);
    wrapper.appendChild(taskWrapper);
}

function createCheckbox() {
    const checkbox = document.createElement('div')
    checkbox.classList.add('task-checkbox')

    const done = document.createElement('input');
    done.type = 'checkbox';
    done.value = '1';

    const label = document.createElement('label');
    label.htmlFor = "task-checkbox";
    label.classList.add('neuromorphic-shadows-inside');

    checkbox.appendChild(done);
    checkbox.appendChild(label);

    return checkbox;
}

function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('neuromorphic-shadows');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    return deleteButton;
}

function createTaskText(msg) {
    const task = document.createElement('p');
    task.innerHTML = msg;
    return task;
}

function deleteTask(button) {
    if (button.classList.contains('delete')) {
        if (confirm('Are you sure that you want to delete this task?')){
            button.parentElement.remove();
        }
    }
}

function saveTasks()  {
    const tasks = wrapper.querySelectorAll(' p');
    let taskList = [];
    
    for (task of tasks) {
        let taskText = task.innerHTML;
        taskList.push(taskText);
    }
    
    const tasksJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', tasksJSON);
    
}

function loadTasks() {
    const tasks = localStorage.getItem('tasks');
    let taskList = JSON.parse(tasks);

    for (task of taskList) {
        createTask(task);
    }
}

loadTasks();
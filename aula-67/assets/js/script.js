const addButton = document.querySelector('.container button');
const toDoInput = document.querySelector('.container input');
const wrapper = document.querySelector('.wrapper');

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    let msg = toDoInput.value;

    if (!msg) {
        alert('Preencha o Campo Corretamente!');
        return;
    }

    let task = createTask(msg);
    wrapper.appendChild(task);


})

function createTask (msg){
    const taskWrapper = document.createElement('article');
    taskWrapper.classList.add('task-container');
    taskWrapper.classList.add('neuromorphic-shadows');
    
    const checkmark = document.createElement('span');
    checkmark.classList.add("checkmark");
    checkmark.classList.add("neuromorphic-shadows-inside");

    const done = document.createElement('input');
    done.type = 'checkbox';

    const task = document.createElement('p');
    task.innerHTML = msg;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('neuromorphic-shadows')
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    
    taskWrapper.appendChild(done);
    taskWrapper.appendChild(checkmark);
    taskWrapper.appendChild(task);
    taskWrapper.appendChild(deleteButton);
    return taskWrapper;
}


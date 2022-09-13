const timer = document.querySelector('.timer');
const btns = document.querySelectorAll('.buttons button');
let seconds = 0;
let time;

btns[0].addEventListener('click', (e) => startTimer());
btns[1].addEventListener('click', (e) => pauseTimer());
btns[2].addEventListener('click', (e) => restartTimer());


function createDateFromSeconds(seconds){
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'GMT'});
}

function startTimer(){
    time = setInterval(function () {
        seconds++;
        timer.innerHTML = createDateFromSeconds(seconds);
    }, 1000);
    timer.classList.remove('paused');
}

function pauseTimer(){
    clearInterval(time);
    timer.classList.add('paused');
}

function restartTimer(){
    clearInterval(time);
    seconds = 0;
    timer.innerHTML = createDateFromSeconds(seconds);
    timer.classList.remove('paused');
}


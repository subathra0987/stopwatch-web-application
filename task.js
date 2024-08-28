let seconds = 00;
let tens = 00;
let mins = 00;
let interval;
let running = false;

const getSeconds = document.querySelector('.seconds');
const getTens = document.querySelector('.tens');
const getMins = document.querySelector('.mins');
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const btnReset = document.querySelector('.btn-reset');
const btnLap = document.querySelector('.btn-lap');
const btnClearLaps = document.querySelector('.btn-clear-laps');
const lapTimes = document.querySelector('.lap-times');

btnStart.addEventListener('click', () => {
    if (!running) {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        running = true;
    }
});

btnStop.addEventListener('click', () => {
    clearInterval(interval);
    running = false;
});

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    mins = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMins.innerHTML = mins;
    lapTimes.innerHTML = '';
    running = false;
});

btnLap.addEventListener('click', () => {
    if (running) {
        const lapTime = `${formatTime(mins)}:${formatTime(seconds)}:${formatTime(tens)}`;
        const li = document.createElement('li');
        li.textContent = lapTime;
        lapTimes.appendChild(li);
    }
});

btnClearLaps.addEventListener('click', () => {
    lapTimes.innerHTML = '';
});

function startTimer() {
    tens++;
    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        getTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if (mins > 9) {
        getMins.innerHTML = mins;
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

let minutes = 00;
let seconds = 00;
let tens = 00;

let appendMinutes = document.getElementById('minutes');
let appendseconds = document.getElementById('seconds');
let appendTens = document.getElementById('tens');

let startButton = document.getElementById('start-button');
let pauseButton = document.getElementById('pause-button');
let stopButton = document.getElementById('stop-button');

let Interval;

startButton.onclick = function(){

    startStopwatch(); // to start counting immediately without delay.
    Interval = setInterval(startStopwatch, 10);
}

pauseButton.onclick = function(){
    
    clearInterval(Interval);
}

stopButton.onclick = function(){

    clearInterval(Interval);
    
    minutes = 00;
    appendMinutes.innerHTML = `0${minutes}`;
    seconds = 00;
    appendseconds.innerHTML = `0${seconds}`;
    tens = 00;
    appendTens.innerHTML = `0${tens}`;
}

function startStopwatch (){
    tens++;
    
    if(tens < 10) {
        appendTens.innerHTML = `0${tens}`;
    }else{
        appendTens.innerHTML = tens;
    }

    if(tens == 100){
        tens = 00;
        appendTens.innerHTML = `0${tens}`;

        seconds++;
        if(seconds < 10) {
            appendseconds.innerHTML = `0${seconds}`;
        }else{
            appendseconds.innerHTML = seconds;
        }
    }

    if(seconds == 60){
        seconds = 00;
        appendseconds.innerHTML = `0${seconds}`;

        minutes++
        if(minutes < 10) {
            appendMinutes.innerHTML = `0${minutes}`;
        }else{
            appendMinutes.innerHTML = minutes;
        }
    }

    if(minutes == 60){
       
        window.alert("SE PASSOU 1 HORA!")   
        clearInterval(Interval);
    
        minutes = 00;
        appendMinutes.innerHTML = `0${minutes}`;
        seconds = 00;
        appendseconds.innerHTML = `0${seconds}`;
        tens = 00;
        appendTens.innerHTML = `0${tens}`;
        }
}
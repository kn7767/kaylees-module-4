var startbtn = document.querySelector('#start');
var q1 = document.querySelector('#question1');

//timer
const startTime = 2; 
//let time = startTime * 60;
const countdownEl = document.getElementById('countdown');

setInterval(runCountdown, 1000);

startbtn.addEventListener('click', runCountdown);

function runCountdown() {
    const min = Math.floor(time / 60);
    let sec = time % 60;

    countdownEl.innerHTML = `${min}: ${sec}`;
    time--;
}
//timer end//

startbtn.addEventListener("click", showq1);

function showq1(){ 
    q1.classList.add("activeInfo");
}

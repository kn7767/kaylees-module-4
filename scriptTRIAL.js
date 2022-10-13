var startbtn = document.querySelector('#start');
var q1 = document.querySelector('#question1');

//timer
function runCountdown() {
    // runCountdown.preventDefault();
    var startTime = 1; 
    let time = startTime * 60;
    const min = Math.floor(time / 60);
    let sec = time % 60;
    
    // sec = sec < 10 ? "0" + seconds : seconds;
    //var startTime = document.querySelector("#countdown")
    
    setInterval(runCountdown, 1000);

    const countdownEl = document.getElementById('countdown');
    countdownEl.innerHTML = (min + ":" + sec) ;
    time--;
    
    console.log(countdownEl);

    if (countdownEl === 0) {
        if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
          }    }
};
startbtn.addEventListener('click', runCountdown);


//timer end//

// startbtn.addEventListener("click", showq1);

// function showq1(){ 
//     q1.classList.add("activeInfo");
// }

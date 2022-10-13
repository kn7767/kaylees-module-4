var startbtn = document.getElementById('start');
var intropage = document.querySelector(".intropage");
var allquestions = document.querySelector(".allquestions");

 //out of time message 
 var results = document.getElementById('results');
//  var qRight = //user input 
 function outofTime(){
    results.style.display = "inline";
    var response = results.value + " out of 5."
    allquestions.style.display = "none";
    response.textContent = response;
    }

//timer section
var countdown = document.getElementById('countdown');
var startTime = 60; //60 second place holder 

function runCountdown() {
    var timerInterval = setInterval(function(){
        startTime--;
        countdown.textContent = "0:" + startTime;

        if(startTime < 0) {
            clearInterval(timerInterval);
            outofTime();
        }
    }, 1000);
    intropage.style.display = "none";
    }

startbtn.addEventListener('click', runCountdown);
startbtn.addEventListener('click', startQuestions);

var q1 = document.getElementById('question1');
var q2 = document.getElementById('question2');
var q3 = document.getElementById('question3');
var q4 = document.getElementById('question4');
var q5 = document.getElementById('question5');

var timerHead = document.querySelector(".timersec");

function startQuestions(){
    if (startTime === 60) { //5=placeholder
        timerHead.style.display = "inline";
        q1.style.display = "inline";
    }
}


var correct = document.querySelectorAll("input.correct");
var incorrect = document.querySelectorAll('input.incorrect'); 
var toques2 = document.getElementById("toq2");
var toques3 = document.getElementById("toq3");
var toques4 = document.getElementById("toq4");
var toques5 = document.getElementById("toq5");

///////
function subtractTime () {
    let subTime = startTime;
    startTime -=5;
    subTime.textContent = "0:" + startTime;
}
for (let i = 0; i < correct.length; i++) {
correct[i].addEventListener("click", () => {
    correct[i].style.backgroundColor = "green";
    toques2.style.display ="inline"
})};

for (let i = 0; i < incorrect.length; i++) {
incorrect[i].addEventListener("click", () => {
    incorrect[i].style.backgroundColor = "red";
    subtractTime();
})};

function toq2() {
    q2.style.display = "inline";
    q1.style.display = "none";
    toques2.style.display = "none";
}
toques2.addEventListener("click", toq2);

function toq3() {
    q3.style.display = "inline";
    q2.style.display = "none";
    toques3.style.display = "none";
}
toques3.addEventListener("click", toq3);

// for (let i = 0; i < correct.length; i++) {
//     correct[i].addEventListener("click", () => {
//         correct[i].style.backgroundColor = "green";
//         toq3.style.display ="inline"
//     })};
    
// for (let i = 0; i < incorrect.length; i++) {
//     incorrect[i].addEventListener("click", () => {
//         incorrect[i].style.backgroundColor = "red";
//         toq3.style.display ="inline"
//         subtractTime();
//     })};
// function toq3() {
//     q3.style.display = "inline";
//     q2.style.display = "none";
// }
// toq3.addEventListener("click", toq3);






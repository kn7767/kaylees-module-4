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
var startTime = 10; //60 second place holder 

function runCountdown() {
    var timerInterval = setInterval(function(){
        startTime--;
        countdown.textContent = "0:" + startTime;

        if(startTime === 0) {
            clearInterval(timerInterval);
            outofTime();
        }
    }, 1000);
    //hides introduction
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
    if (startTime === 10) { //5=placeholder
        timerHead.style.display = "inline";
        q1.style.display = "inline";
    }
}

var correct = document.querySelector(".correct");
var incorrect = document.querySelector (".incorrect");
var correctans = document.getElementById("correctanswer");
var incorrectans = document.getElementById("incorrectanswer");

function q1correct(){
        correctans.style.display = "inline";
        q1.style.display = "none";
        q2.style.display = "inline";
    
}
// correct.addEventListener("click", q1correct);

correct.addEventListener("click", () => {
    correct.style.backgroundColor = "green";
    q2.style.display = "inline";
});
incorrect.addEventListener("click", () => {
    incorrect.style.backgroundColor = "red";
    q2.style.display = "inline";
});

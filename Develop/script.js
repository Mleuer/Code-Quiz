var question1 = {
    name: "Which of the following is not a primitive?",
    possibleAnswers: ["Number", "Object", "Boolean", "String"],
    correctAnswer: "Object"
}

var question2 = {
    name: "Code contained within '{}' is known as a...? ",
    possibleAnswers: ["Block", "Statement", "Condition", "Loop"],
    correctAnswer: "Block"
}

var question3 = {
    name: "For loops are mainly used to iterate through...?",
    possibleAnswers: ["Objects", "Functions", "Numbers", "Collections"],
    correctAnswer: "Collections"
}

var question4 = {
    name: "A useful method to use during debugging is...?",
    possibleAnswers: ["Console.log()", "Array.foreach()", "alert()", "prompt()"],
    correctAnswer: "Console.log()"
}

var question5 = {
    name: "'count += 1;' can be rewritten as...",
    possibleAnswers: ["count = 1;", "count = count + 1;", "var count = 1;", "var count = count + 1;"],
    correctAnswer: "count = count + 1;"
}

var questions = [question1, question2, question3, question4, question5];

var headerElement = document.querySelector("#main-header");
var descriptionElement = document.querySelector("#description");
var responseElement = document.querySelector("#response");
var startButton = document.querySelector("#start-button");
var button1 = document.querySelector("#question1-button");
var button2 = document.querySelector("#question2-button");
var button3 = document.querySelector("#question3-button");
var button4 = document.querySelector("#question4-button");
var highscoreButton = document.querySelector("#highscore");
var timerElement = document.querySelector("#timer-count");
var questionList = document.querySelector("#question-list");

var buttons = [button1, button2, button3, button4];

startButton.addEventListener("click", function () {
    descriptionElement.setAttribute("style", "display: none");
    startButton.setAttribute("style", "display: none");
    var seconds = 75;
    setInterval(function () {
        seconds--;
        timerElement.textContent = seconds;
    }, 1000);
    presentQuestion(1);
});

button1.addEventListener("click", function() {

});

button2.addEventListener("click", function() {
    
});

button3.addEventListener("click", function() {
    
});

button4.addEventListener("click", function() {
    
});

function presentQuestion(questionNumber) {
    var question = questions[questionNumber]
    headerElement.textContent = questionNumber + ": " + question.name;
    
    for(var i = 0; i < question.possibleAnswers.length; i++) {
        buttons[i].textContent = question.possibleAnswers[i];
        buttons[i].setAttribute("style", "display: unset");
    }
}


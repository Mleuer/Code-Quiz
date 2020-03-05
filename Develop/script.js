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

var button1 = document.querySelector("#question1-button");
var highscoreButton = document.querySelector("#highscore");
var timerElement = document.querySelector("#timer-count");
var questionList = document.querySelector("#question-list");


class Question {
    constructor(description, possibleAnswers, correctAnswer) {
        this.description = description;
        this.possibleAnswers = possibleAnswers;
        this.correctAnswer = correctAnswer;
    }
}

var question1 = new Question("Which of the following is not a primitive?", ["Number", "Object", "Boolean", "String"], "Object");
var question2 = new Question("Code contained within '{}' is known as a...? ", ["Block", "Statement", "Condition", "Loop"], "Block");
var question3 = new Question("For loops are mainly used to iterate through...?", ["Objects", "Functions", "Numbers", "Collections"], "Collections");
var question4 = new Question("A useful method during debugging is...?", ["Console.log()", "Array.foreach()", "alert()", "prompt()"], "Console.log()");
var question5 = new Question("'count += 1;' can be rewritten as...", ["count = 1;", "count = count + 1;", "var count = 1;", "var count = count + 1;"], "count = count + 1;");

var questions = [question1, question2, question3, question4, question5];
var questionToBeRendered = 0;
var questionBeingRendered;
var seconds = 50;
var score = 0;

var welcomeCard = document.querySelector(".welcome-card");
var questionCard = document.querySelector(".question-card");
var responseCard = document.querySelector(".response-card");
var highScoreCard = document.querySelector(".highscore-card");
var highScoreList = document.querySelector("#highscore-list");

var startButton = document.querySelector("#start-button");
var saveButton = document.querySelector("#save-button");
var userInputField = document.querySelector("#user-input");

var questionDescription = document.querySelector("#question-description");
var button1 = document.querySelector("#question1-button");
var button2 = document.querySelector("#question2-button");
var button3 = document.querySelector("#question3-button");
var button4 = document.querySelector("#question4-button");

var responseElement = document.querySelector("#response");

var scoreEl = document.querySelector("#score");
var highscoreButton = document.querySelector("#highscore");
var timerElement = document.querySelector("#timer-count");
var questionList = document.querySelector("#question-list");

var buttons = [button1, button2, button3, button4];


startButton.addEventListener("click", function () {
    var timer = setInterval(function () {
        seconds--;
        timerElement.textContent = seconds;
        if (seconds <= 0) {
            renderGameOver();
            timerElement.textContent = seconds;
            clearInterval(timer);
        }
    }, 1000);

    renderQuestion(questionToBeRendered);
});

button1.addEventListener("click", function () {
    responseElement.setAttribute("style", "display: unset");
    checkAnswer(this);
});

button2.addEventListener("click", function () {
    responseElement.setAttribute("style", "display: unset");
    checkAnswer(this);
});

button3.addEventListener("click", function () {
    responseElement.setAttribute("style", "display: unset");
    checkAnswer(this);
});

button4.addEventListener("click", function () {
    responseElement.setAttribute("style", "display: unset");
    checkAnswer(this);
});

saveButton.addEventListener("click", function () {
    var scores = {};
    if (localStorage.getItem("scores")) {
        scores = JSON.parse(localStorage.getItem("scores"));
    }
    Object.defineProperty(scores, userInputField.value, { value: score, enumerable: true });

    var scoresJSON = JSON.stringify(scores);
    localStorage.setItem("scores", scoresJSON);

    window.location.href = "./highscore.html";
})

function getHighScores() {
    if (localStorage.getItem("scores")) {
        scores = JSON.parse(localStorage.getItem("scores"));
        var sortedScores = sortByHighScore(scores);

        var scoreInitials = Object.keys(sortedScores)

        for (var i = 0; i < scoreInitials.length; i++) {
            var scoreLi = document.createElement("li");
            scoreLi.setAttribute("class", "centered");
            var initials = scoreInitials[i];
            var upperInitials = initials.toLocaleUpperCase();
            scoreLi.textContent = upperInitials + " : " + sortedScores[initials];
            highScoreList.append(scoreLi);
        }
    }
}

function sortByHighScore(scores) {
    var InitialsAndScoresArray = Object.entries(scores);
    InitialsAndScoresArray.sort(sortFunction);

    function sortFunction(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[1] < b[1]) ? 1 : -1;
        }
    }
    return InitialsAndScoresArray;
}

function renderQuestion(questionNumber) {
    welcomeCard.setAttribute("style", "display: none");
    responseCard.setAttribute("style", "display: none");

    var question = questions[questionNumber];
    questionBeingRendered = question;
    questionDescription.textContent = questionNumber + 1 + ": " + question.description;

    questionCard.setAttribute("style", "display: initial");


    for (var i = 0; i < question.possibleAnswers.length; i++) {
        buttons[i].textContent = question.possibleAnswers[i];
        buttons[i].setAttribute("style", "display: unset");
    }
    questionToBeRendered++;
}

function checkAnswer(button) {
    if (button.textContent !== questionBeingRendered.correctAnswer) {
        responseElement.textContent = "Incorrect";
        seconds -= 10;
    }
    else {
        responseElement.textContent = "Correct";
        score += 5;
    }
    setTimeout(function () {
        if (questionToBeRendered < questions.length) {
            renderQuestion(questionToBeRendered);
        }
        else {
            renderGameOver();
        }
    }, 500);
}

function renderGameOver() {
    questionCard.setAttribute("style", "display: none");
    highScoreCard.setAttribute("style", "display: unset");
    scoreEl.textContent = "Your Score: " + score;
}


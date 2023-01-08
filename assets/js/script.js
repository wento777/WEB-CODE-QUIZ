var wrapperEl = document.getElementById('wrapper');
var containerEl = document.querySelector("#opening-container");
var questionsEl = document.querySelector('#questions');
var questionEl = document.querySelector('#question');
var answers = document.querySelector('#answers');
var timer = document.querySelector('#timer');
var startBtn = document.querySelector("#start-button");

var scoreIdCounter = 0;
var timeLeft = 75;
var setIntervalIdNumber;
var curentindex = 0;

// list of all questions, choices, and answers
var questions = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts',
    },
    {
        title: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses',
    },
    {
        title: 'Arrays in JavaScript can be used to store ____.',
        choices: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above',
        ],
        answer: 'all of the above',
    },
    {
        title:
            'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },
    {
        title:
            'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log',
    },
];

// Countdown Timer
function countdown() {
    timeLeft--
    timer.textContent = timeLeft;
    if (timeLeft <= 0) {
        endQuiz();
    }
}

function showQuestion() {
    questionEl.textContent = questions[curentindex].title
    answers.innerHTML = ""
    for (var i = 0; i < questions[curentindex].choices.length; i++) {
        var choiceBtn = document.createElement('button');
        choiceBtn.textContent = questions[curentindex].choices[i]
        choiceBtn.setAttribute('value', questions[curentindex].choices[i])
        choiceBtn.onclick = checkAnswers
        answers.append(choiceBtn);
    }

}

function checkAnswers() {
    if (this.value !== questions[curentindex].answer) {
        timeLeft -= 10
        timer.textContent = timeLeft;
        if (timeLeft <= 0) {
            endQuiz();
        }

    }
    // After deducting time if the user selected the wrong answer, we will add 1 to the currentIndex variable
    curentindex++
    // Before, proceeding to the next question, check to see if the currentIndex is equal to questions.length - 1
    // if so, we know we have already cycled through all the questions in our questions array. Then just show the score screen.
    if (curentindex == questions.length - 1) {
        endQuiz();
    } else {
        showQuestion()
    }

}

function endQuiz() {
    // whether times is up or the user has answered all the questions, clear the interval
    clearInterval(setIntervalIdNumber);
    // clear out the contents of wrapper
    wrapperEl.replaceChildren();
    var spanEl = document.createElement('span');
    spanEl.textContent = 'You ran out of time or completed the code quiz. Please enter a name to save your score.';
    wrapperEl.appendChild(spanEl);
    var nameInputEl = document.createElement('input');
    nameInputEl.setAttribute('placeholder', 'Enter your name in this input field');
    nameInputEl.setAttribute('id', 'nameInput');
    var labelEl = document.createElement('label');
    labelEl.setAttribute('for', 'nameInput');
    wrapperEl.append(labelEl, nameInputEl);
    console.log('hey, game over pal');
}


startBtn.addEventListener("click", function () {
    containerEl.classList.add("hide");
    setIntervalIdNumber = setInterval(countdown, 1000);
    timer.textContent = timeLeft;
    showQuestion()
})

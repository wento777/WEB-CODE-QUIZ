var containerEl = document.querySelector(".opening-container");

var scoreIdCounter = 0;
var timeLeft = 75;
var timeInterval;

var startBtn = document.querySelector("#start-button");
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
var questionsEl = document.querySelector('#questions');
var questionEl = document.querySelector('#question');
var answers = document.querySelector('#answers');
var timer = document.querySelector('#timer');

startBtn.addEventListener("click", function(){
    containerEl.classList.add("hide");
    timeInterval = setInterval(countdown, 1000);
    timer.textContent = timeLeft;
    showQuestion()

})
function countdown(){
    timeLeft --
    timer.textContent = timeLeft;
    if ( timeLeft<=0){
        endQuiz();
    }
}
function showQuestion(){
    questionEl.textContent = questions[curentindex].title
    answers.innerHTML = ""
    for (var i = 0 ; i<questions[curentindex].choices.length; i++){
        var choiceBtn = document.createElement('button');
        choiceBtn.textContent = questions[curentindex].choices[i]
        choiceBtn.setAttribute('value', questions[curentindex].choices[i])
        choiceBtn.onclick = checkAnswers
        answers.append(choiceBtn);
    

    }

}
function checkAnswers(){
    if (this.value !== questions[curentindex].answer){
        timeLeft-=10 
        timer.textContent = timeLeft;
        if ( timeLeft<=0){
            endQuiz();
        }

    }
    curentindex++
    curentindex>2
    showQuestion()
}


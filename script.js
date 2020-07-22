// DOM Connections

var button0 = document.getElementById("btn0");
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");

var text0 = document.getElementById("choice0");
var text1 = document.getElementById("choice1");
var text2 = document.getElementById("choice2");
var text3 = document.getElementById("choice3");

var progress = document.getElementById("progress");

var questionText = document.getElementById("question");



// Available Questions
var questions = [
{
    question: "What is the capital of the Republic in (The Phantom Menace)?",
    a:"Tatooine",
    b:"Naboo",
    c:"Belsavis",
    d:"Corusacnt",
    answer:"d",
},
{
    question: "Who is the Chancellor in the beginning of (The Phantom Menace)?",
    a:"Chancellor Vallorum",
    b:"Chancellor Palpatine",
    c:"Chancellor Amidala",
    d:"Chancellor Binks",
    answer:"a",
},
{
    question: "Where is Palpatine's home planet?",
    a:"Coruscant",
    b:"Naboo",
    c:"Alderran",
    d:"Nar Shadda",
    answer:"b",
},
{
    question: "question 4",
    a:"1",
    b:"2",
    c:"3",
    d:"4",
    answer:"a",
},
{
    question: "question 5",
    a:"1",
    b:"2",
    c:"3",
    d:"4",
    answer:"a",
},
{
    question: "question 6",
    a:"1",
    b:"2",
    c:"3",
    d:"4",
    answer:"a",
},
]

// Variables
var score = 0;
var currentQuestion = 0;

renderQuestion();

// Render Progress
progress.innerHTML = "Question " + parseInt(currentQuestion + 1);

// Functions
    // Render Question
    function renderQuestion() {
        questionText.innerHTML = questions[currentQuestion].question;
        text0.innerHTML = questions[currentQuestion].a;
        text1.innerHTML = questions[currentQuestion].b;
        text2.innerHTML = questions[currentQuestion].c;
        text3.innerHTML = questions[currentQuestion].d;
    }

    // Receive Input
    button0.addEventListener("click",checkAnswer(a));
    button1.addEventListener("click",checkAnswer(b));
    button2.addEventListener("click",checkAnswer(c));
    button3.addEventListener("click",checkAnswer(d));
    

    // Check Answer
    function checkAnswer(answer) {
        if( answer == questions[currentQuestion].answer){
            score++;
            answerIsCorrect();
        }else{
            answerIsWrong();
        }
        
        if(currentQuestion < questions.length){
            currentQuestion++;
            renderQuestion();
        }else{
            gameOver();
        }
    }

    // Correct Answer
    function answerIsCorrect() {
        score++
    }

    // Incorrect Answer
    function answerIsWrong() {

    }

    // Game Over
    function gameOver() {

    }


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
    question: "question 1",
    a:"1",
    b:"2",
    c:"3",
    d:"4",
    answer:"a",
},
{
    question: "question 2",
    a:"1",
    b:"2",
    c:"3",
    d:"4",
    answer:"a",
},
{
    question: "question 3",
    a:"1",
    b:"2",
    c:"3",
    d:"4",
    answer:"a",
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




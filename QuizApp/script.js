const questions = [
    {
        question: "What is the capital of France?",
        answers: [{
            text: "Berlin",
            correct: false
        },
        {
            text: "Madrid",
            correct: false
        },
        {
            text: "Paris",
            correct: true
        },
        {
            text: "Rome",
            correct: false
        },
        ]
        
    },
    {
        question: "What is the capital of Germany?",
        answers: [{
            text: "Berlin",
            correct: true
        },
        {
            text: "Madrid",
            correct: false
        },
        {
            text: "Paris",
            correct: false
        },
        {
            text: "Rome",
            correct: false
        },
        ]
        
    },
    {
        question: "What is the capital of Spain?",
        answers: [{
            text: "Berlin",
            correct: false
        },
        {
            text: "Madrid",
            correct: true
        },
        {
            text: "Paris",
            correct: false
        },
        {
            text: "Rome",
            correct: false
        },
        ]
        
    },
    {
        question: "What is the capital of Italy?",
        answers: [{
            text: "Berlin",
            correct: false
        },
        {
            text: "Madrid",
            correct: false
        },
        {
            text: "Paris",
            correct: false
        },
        {
            text: "Rome",
            correct: true
        },
        ]
        
    },
    {
        question: "What is the capital of Portugal?",
        answers: [{
            text: "Berlin",
            correct: false
        },
        {
            text: "Madrid",
            correct: false
        },
        {
            text: "Lisbon",
            correct: true
        },
        {
            text: "Rome",
            correct: false
        },
        ]
        
    },
    {
        question: "What is the capital of the Netherlands?",
        answers: [{
            text: "Amsterdam",
            correct: true
        },
        {
            text: "Madrid",
            correct: false
        },
        {
            text: "Paris",
            correct: false
        },
        {
            text: "Rome",
            correct: false
        },
        ]
        
    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let socre = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    socre = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    let currentQuestion  = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
}
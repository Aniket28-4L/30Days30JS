const questions = [
    {
        question: "What is the capital of France?",
        answers: [{text: "Berlin",correct: false},
        {text: "Madrid",  correct: false},
        {text: "Paris",correct: true},
        {text: "Rome", correct: false},]
    },
   
    {   
        question: "Who is the current Prime Minister of France?",
        answers: [{text: "Emmanuel Macron", correct: true},
        {text: "Jean-Paul Macron", correct: false},
        {text: "François Hollande", correct: false},
        {text: "Jean-Luc Godard", correct: false},]
    },

    {
        question: "Which country is the largest producer of coffee beans?",
        answers: [{text: "Brazil", correct: true},
        {text: "Colombia", correct: false},
        {text: "Ethiopia", correct: false},
        {text: "Indonesia", correct: false},]
    },

    {
        question: "What is the most populous city in the world?",
        answers: [{text: "New York", correct: false},
        {text: "Tokyo", correct: false},
        {text: "London", correct: false},
        {text: "Beijing", correct: true},]
    },

    {
        question: "Which country has the highest number of languages spoken?",
        answers: [{text: "China", correct: false},
        {text: "India", correct: false},
        {text: "United States", correct: false},
        {text: "Indonesia", correct: true},]
    },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion  = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    })
    nextButton.style.display = 'block';
}


function showScore(){
    resetState();
    questionElement.innerHTML = "You answered " + score + " questions correctly!";
    nextButton.innerHTML = 'Restart';
    nextButton.style.display = 'block';
    
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();

    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();

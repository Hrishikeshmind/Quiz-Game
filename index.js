const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2
    },
    {
        question: "Who developed JavaScript?",
        options: ["Brendan Eich", "Tim Berners-Lee", "Dennis Ritchie", "Guido van Rossum"],
        correctAnswer: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 2
    },
    {
        question: "Which programming language is known as the backbone of the web?",
        options: ["Python", "C++", "Java", "JavaScript"],
        correctAnswer: 3
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionButtons = document.querySelectorAll(".option-btn");

    questionElement.innerHTML = questions[currentQuestion].question;
    optionButtons.forEach((button, index) => {
        button.innerHTML = questions[currentQuestion].options[index];
        button.style.backgroundColor = "#3498db";
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    const optionButtons = document.querySelectorAll(".option-btn");

    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById("score").innerHTML = `Score: ${score}`;
    }

    optionButtons.forEach((button, index) => {
        if (index === correctAnswer) {
            button.style.backgroundColor = "#2ecc71"; // Correct answer green
        } else {
            button.style.backgroundColor = "#e74c3c"; // Incorrect answer red
        }
    });
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-box").innerHTML = `<h2>Your final score is: ${score}/${questions.length}</h2>`;
    }
}

window.onload = loadQuestion;

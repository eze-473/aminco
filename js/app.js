const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        answers: ["París", "Londres", "Madrid", "Berlín"],
        correct: "París"
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        answers: ["Tierra", "Marte", "Júpiter", "Saturno"],
        correct: "Júpiter"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const answerButtons = document.querySelectorAll('.answer');

    questionElement.textContent = questions[currentQuestionIndex].question;
    answerButtons.forEach((button, index) => {
        button.textContent = questions[currentQuestionIndex].answers[index];
        button.onclick = () => checkAnswer(button.textContent);
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestionIndex].correct) {
        alert("¡Correcto!");
    } else {
        alert("Incorrecto. La respuesta correcta es " + questions[currentQuestionIndex].correct);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("¡Has completado el juego!");
    }
}

loadQuestion();
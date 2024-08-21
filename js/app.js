const questions = [
    {
        question: "¿Cuál es la capital de Argentina?",
        options: ["Córdoba", "Rosario", "Buenos Aires", "Mendoza"],
        correct: 2
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
        correct: 1
    },
    {
        question: "¿Quién pintó la Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correct: 2
    }
];

function loadQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];

    document.getElementById('question').innerText = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(button, index === question.correct);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
    }
    setTimeout(() => {
        window.location.href = '../pages/ruleta.html';
    }, 1000);
}

window.onload = loadQuestion;
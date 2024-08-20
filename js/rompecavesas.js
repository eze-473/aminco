const puzzle = document.getElementById('puzzle');
const pieces = Array.from({ length: 16 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
let timer;

pieces.forEach((piece, index) => {
    const div = document.createElement('div');
    div.className = 'piece';
    div.style.backgroundImage = 'url("../img/57.jpg")'; // Reemplaza con la ruta de tu imagen
    div.style.backgroundPosition = `${-100 * ((piece - 1) % 4)}px ${-100 * Math.floor((piece - 1) / 4)}px`;
    div.dataset.index = piece - 1; // Guardar el índice correcto
    div.draggable = true;
    div.addEventListener('dragstart', dragStart);
    div.addEventListener('dragover', dragOver);
    div.addEventListener('drop', drop);
    puzzle.appendChild(div);
});

let dragged;

function dragStart(event) {
    dragged = event.target;
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    if (event.target.className === 'piece') {
        const draggedIndex = Array.from(puzzle.children).indexOf(dragged);
        const targetIndex = Array.from(puzzle.children).indexOf(event.target);
        puzzle.insertBefore(dragged, puzzle.children[targetIndex]);
        puzzle.insertBefore(event.target, puzzle.children[draggedIndex]);
        checkWin();
    }
}

function checkWin() {
    const currentOrder = Array.from(puzzle.children).map(piece => parseInt(piece.dataset.index));
    const correctOrder = Array.from({ length: 16 }, (_, i) => i);
    if (currentOrder.every((pos, index) => pos === correctOrder[index])) {
        clearInterval(timer);
        alert('¡Ganaste!');
    }
}

// Agregar cronómetro de 30 segundos
let timeLeft = 30;
const timerDisplay = document.createElement('div');
timerDisplay.id = 'timer';
timerDisplay.textContent = `Tiempo restante: ${timeLeft} segundos`;
document.body.appendChild(timerDisplay);

timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Tiempo restante: ${timeLeft} segundos`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        alert('¡Perdiste!');
    }
}, 1000);
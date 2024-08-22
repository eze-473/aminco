const puzzle = document.getElementById('puzzle');
const pieces = Array.from({ length: 16 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
let timer;

// Lista de imágenes
const images = [
    "../img/PANTALLA ROMPECABEZAS/IMAGENES ROMPECABEZAS/CAMIONETA AMINCO.jpg",
    "../img/PANTALLA ROMPECABEZAS/IMAGENES ROMPECABEZAS/Topografía descripción de servicios.jpg",
    "../img/PANTALLA ROMPECABEZAS/IMAGENES ROMPECABEZAS/Direccion tecnica de perforaciones portada.jpg",
    "../img/PANTALLA ROMPECABEZAS/IMAGENES ROMPECABEZAS/Geotecnia descripción de servicios.jpg",
    "../img/PANTALLA ROMPECABEZAS/IMAGENES ROMPECABEZAS/MONTAÑAS.jpg",
    "../img/PANTALLA ROMPECABEZAS/IMAGENES ROMPECABEZAS/Social descripcion de servicios.jpeg",
    "../img/PANTALLA ROMPECABEZAS/IMAGENES ROMPECABEZAS/Topografia portada.jpg"
];

// Seleccionar una imagen al azar
const selectedImage = images[Math.floor(Math.random() * images.length)];

pieces.forEach((piece, index) => {
    const div = document.createElement('div');
    div.className = 'piece';
    div.style.backgroundImage = `url("${selectedImage}")`; // Usar la imagen seleccionada
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

// Agregar cronómetro de 90 segundos
let timeLeft = 90;
const timerCanvas = document.getElementById('timerCanvas');
const ctx = timerCanvas.getContext('2d');

function drawTimer() {
    ctx.clearRect(0, 0, timerCanvas.width, timerCanvas.height);
    ctx.beginPath();
    ctx.arc(50, 50, 45, 0, 2 * Math.PI); // Ajustar el tamaño y la posición
    ctx.strokeStyle = '#ffff';
    ctx.lineWidth = 5;
    ctx.stroke();

    const endAngle = (2 * Math.PI * timeLeft) / 90;
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.arc(50, 50, 45, -Math.PI / 2, endAngle - Math.PI / 2, false); // Ajustar el tamaño y la posición
    ctx.fillStyle = '#103b037c';
    ctx.fill();

    ctx.font = '14px Arial'; // Ajustar el tamaño de la fuente
    ctx.fillStyle = '#ffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${timeLeft} s`, 50, 50); // Ajustar la posición del texto
}

timer = setInterval(() => {
    timeLeft--;
    drawTimer();
    if (timeLeft <= 0) {
        clearInterval(timer);
        alert('¡Perdiste!');
    }
}, 1000);

drawTimer();
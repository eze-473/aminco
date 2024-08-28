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
    div.addEventListener('touchstart', touchStart);
    div.addEventListener('touchmove', touchMove);
    div.addEventListener('touchend', touchEnd);
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

function touchStart(event) {
    dragged = event.target;
}

function touchMove(event) {
    event.preventDefault();
    const touch = event.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (element && element.className === 'piece') {
        const draggedIndex = Array.from(puzzle.children).indexOf(dragged);
        const targetIndex = Array.from(puzzle.children).indexOf(element);
        puzzle.insertBefore(dragged, puzzle.children[targetIndex]);
        puzzle.insertBefore(element, puzzle.children[draggedIndex]);
    }
}

function touchEnd(event) {
    checkWin();
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
    ctx.arc(50, 50, 45, -Math.PI / 2, endAngle - Math.PI /  false); // Ajustar el tamaño y la posición
    ctx.fill();

    ctx.font = '10px '; // Ajustar el tamaño de la fuente
    ctx.fillStyle = '#ffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${timeLeft} `, 50, 50); // Ajustar la posición del texto
}

timer = setInterval(() => {
    timeLeft--;
    drawTimer();
    if (timeLeft <= 0) {
        clearInterval(timer);
        showMessage('Se acabó el tiempo');
    }
}, 1000);

drawTimer();

function showMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.textContent = message;
    messageDiv.style.position = 'absolute';
    messageDiv.style.top = '40px';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translateX(-50%)';
    messageDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.)';
    messageDiv.style.color = 'white';
    messageDiv.style.padding = '10px';
    messageDiv.style.borderRadius = '5px';
    messageDiv.style.fontSize = '54px'; // Ajustar el tamaño de la fuente
    messageDiv.style.fontWeight = 'bold'; // Hacer el texto en negrita
    document.body.appendChild(messageDiv);
}  messageDiv.style.color = 'white';
messageDiv.style.padding = '10px';
messageDiv.style.borderRadius = '5px';
messageDiv.style.fontSize = '24px'; // Ajustar el tamaño de la fuente
messageDiv.style.fontWeight = 'bold'; // Hacer el texto en negrita
document.body.appendChild(messageDiv);


// Modificar la función checkWin para mostrar el mensaje de victoria
function showAlertAndRedirect() {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert';
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '50%';
    alertDiv.style.left = '50%';
    alertDiv.style.transform = 'translate(-50%, -50%)';
    alertDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    alertDiv.style.color = 'white';
    alertDiv.style.padding = '20px';
    alertDiv.style.borderRadius = '10px';
    alertDiv.style.textAlign = 'center';

    const alertImg = document.createElement('img');
    alertImg.src = '"../img/PANTALLA GANASTE.jpg"'; // Reemplaza con la ruta de tu imagen
    alertImg.style.width = '200px'; // Ajustar el tamaño de la imagen
    alertImg.style.height = '200px'; // Ajustar el tamaño de la imagen
    alertDiv.appendChild(alertImg);

    const alertText = document.createElement('p');
    alertText.textContent = '¡Has ganado!';
    alertText.style.marginTop = '10px';
    alertDiv.appendChild(alertText);

    document.body.appendChild(alertDiv);

    setTimeout(() => {
        window.location.href = '../index.html'; // Reemplaza con la URL de la página a la que quieres redirigir
    }, 3000); // Espera 3 segundos antes de redirigir
}

function countdown() {
    if (timeLeft > 0) {
        timeLeft--;
        drawTimer();
        setTimeout(countdown, 1000);
    } else {
        showAlertAndRedirect();
    }
}

drawTimer();
countdown();
const canvas = document.getElementById('ruleta');
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 150;
const numSides = 7;
const angleStep = (2 * Math.PI) / numSides;
let rotationAngle = 0;
let speed = 0;
let isSpinning = false;

function drawRoulette() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < numSides; i++) {
        const startAngle = i * angleStep + rotationAngle;
        const endAngle = (i + 1) * angleStep + rotationAngle;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();

        ctx.fillStyle = i % 2 === 0 ? '#FFDDC1' : '#FFABAB';
        ctx.fill();
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, 0, 2 * Math.PI);
    ctx.fillStyle = '#FF6F61';
    ctx.fill();
    ctx.stroke();

    // Dibujar la flecha
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - radius - 10);
    ctx.lineTo(centerX - 10, centerY - radius - 30);
    ctx.lineTo(centerX + 10, centerY - radius - 30);
    ctx.closePath();
    ctx.fillStyle = '#000000';
    ctx.fill();
}

function animateRoulette() {
    if (speed > 0) {
        rotationAngle += speed;
        speed *= 0.97; // Reduce speed gradually
        drawRoulette();
        requestAnimationFrame(animateRoulette);
    } else {
        isSpinning = false;
        selectOption();
    }
}

function selectOption() {
    const selectedAngle = rotationAngle % (2 * Math.PI);
    const selectedIndex = Math.floor(selectedAngle / angleStep);
    alert(`La opción seleccionada es: ${selectedIndex + 1}`);
}

canvas.addEventListener('click', () => {
    if (!isSpinning) {
        speed = 0.3; // Initial speed
        isSpinning = true;
        animateRoulette();
    }
});

drawRoulette(); // Draw the roulette initially
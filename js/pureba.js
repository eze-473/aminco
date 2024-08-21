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

const options = [
    'Geología',
    'Geotecnia',
    'Topografía',
    'Perforaciones',
    'Hidrogeología',
    'Geofísica',
    'Social'
];

const urls = [
    "../pages/preguntados.html",
    "../pages/preguntados.html",
    "../pages/preguntados.html",
    "../pages/preguntados.html",
    "../pages/preguntados.html",
    "../pages/preguntados.html",
    "../pages/preguntados.html"
];

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

        // Dibujar el texto de la opción
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(startAngle + angleStep / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#000000';
        ctx.font = '16px Arial';
        ctx.fillText(options[i], radius - 10, 10);
        ctx.restore();
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
        speed *= 0.98; // Reduce speed more slowly
        drawRoulette();
        requestAnimationFrame(animateRoulette);
    } else {
        isSpinning = false;
        selectOption();
    }
}

function selectOption() {
    const selectedAngle = (rotationAngle + Math.PI / 2) % (2 * Math.PI);
    const selectedIndex = Math.floor((selectedAngle / angleStep) + numSides) % numSides;
    console.log(`Selected angle: ${selectedAngle}`);
    console.log(`Selected index: ${selectedIndex}`);
    console.log(`Selected option: ${options[selectedIndex]}`);
    window.location.href = urls[selectedIndex];
}

canvas.addEventListener('click', (event) => {
    const x = event.offsetX - centerX;
    const y = event.offsetY - centerY;
    const clickAngle = Math.atan2(y, x) - rotationAngle;
    const adjustedAngle = (clickAngle + 2 * Math.PI) % (2 * Math.PI);
    for (let i = 0; i < numSides; i++) {
        const startAngle = i * angleStep;
        const endAngle = (i + 1) * angleStep;
        if (adjustedAngle >= startAngle && adjustedAngle < endAngle) {
            console.log(`Clicked option: ${options[i]}`);
            window.location.href = urls[i];
            break;
        }
    }
});

document.getElementById('spinButton').addEventListener('click', () => {
    if (!isSpinning) {
        speed = 1.5; // Higher initial speed
        isSpinning = true;
        animateRoulette();
    }
});

drawRoulette();
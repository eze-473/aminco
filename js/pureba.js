const canvas = document.getElementById('ruleta');
const ctx = canvas.getContext('2d');
const girarBtn = document.getElementById('girar');
const preguntaEl = document.getElementById('pregunta');
const numLados = 7;
const angulo = 2 * Math.PI / numLados;
let anguloActual = 0;

const opciones = ["Geología", "Geotecnia", "Topografía", "Perforaciones", "Hidrogeología", "Social", "Geología"];

const preguntas = [
    ["Pregunta de Geología 1", "Pregunta de Geología 2", "Pregunta de Geología 3"],
    ["Pregunta de Geotecnia 1", "Pregunta de Geotecnia 2", "Pregunta de Geotecnia 3"],
    ["Pregunta de Topografía 1", "Pregunta de Topografía 2", "Pregunta de Topografía 3"],
    ["Pregunta de Perforaciones 1", "Pregunta de Perforaciones 2", "Pregunta de Perforaciones 3"],
    ["Pregunta de Hidrogeología 1", "Pregunta de Hidrogeología 2", "Pregunta de Hidrogeología 3"],
    ["Pregunta de Social 1", "Pregunta de Social 2", "Pregunta de Social 3"],
    ["Pregunta de Geología 1", "Pregunta de Geología 2", "Pregunta de Geología 3"]
];

function dibujarRuleta() {
    for (let i = 0; i < numLados; i++) {
        ctx.beginPath();
        ctx.moveTo(250, 250);
        ctx.arc(250, 250, 250, angulo * i, angulo * (i + 1));
        ctx.closePath();
        ctx.fillStyle = `hsl(${i * (360 / numLados)}, 100%, 50%)`;
        ctx.fill();
        ctx.stroke();
        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate(angulo * (i + 0.5));
        ctx.textAlign = "center";
        ctx.fillStyle = "#000";
        ctx.font = "20px Arial";
        ctx.fillText(opciones[i], 150, 10);
        ctx.restore();
    }
}

function girarRuleta() {
    const giro = Math.random() * 360 + 360 * 3; // Gira al menos 3 vueltas completas
    const duracion = 3000; // Duración de la animación en milisegundos
    const inicio = Date.now();

    function animar() {
        const tiempoTranscurrido = Date.now() - inicio;
        const progreso = Math.min(tiempoTranscurrido / duracion, 1);
        anguloActual = giro * progreso;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate((anguloActual * Math.PI) / 180);
        ctx.translate(-250, -250);
        dibujarRuleta();
        ctx.restore();

        if (progreso < 1) {
            requestAnimationFrame(animar);
        } else {
            mostrarPregunta();
        }
    }

    animar();
}

function mostrarPregunta() {
    const indice = Math.floor((anguloActual % 360) / (360 / numLados));
    const preguntasDelLado = preguntas[indice];
    const preguntaAleatoria = preguntasDelLado[Math.floor(Math.random() * preguntasDelLado.length)];
    preguntaEl.textContent = preguntaAleatoria;
}

girarBtn.addEventListener('click', girarRuleta);
dibujarRuleta();
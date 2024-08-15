const preguntas = [
    "¿Cuál es la capital de Francia?",
    "¿Quién escribió 'Cien años de soledad'?",
    "¿Cuál es el río más largo del mundo?",
    "¿En qué año llegó el hombre a la luna?",
    "¿Cuál es el elemento químico con el símbolo O?"
];

function girarRuleta() {
    const ruleta = document.querySelector('#ruleta img');
    const angulo = Math.floor(Math.random() * 360) + 720; // Gira al menos dos vueltas completas
    ruleta.style.transform = `rotate(${angulo}deg)`;

    setTimeout(() => {
        const preguntaIndex = Math.floor(Math.random() * preguntas.length);
        document.getElementById('pregunta').innerText = preguntas[preguntaIndex];
    }, 4000); // Espera a que termine la animación
}
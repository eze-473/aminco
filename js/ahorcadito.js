const palabras = ["topgrafia", "topgrafia", "topgrafia", "topgrafia"];
let palabra = palabras[Math.floor(Math.random() * palabras.length)];
let palabraOculta = Array(palabra.length).fill("_");
let errores = 0;

function actualizarPalabra() {
    document.getElementById("palabra").innerText = palabraOculta.join(" ");
}

function dibujarAhorcado() {
    const canvas = document.getElementById("ahorcado");
    const ctx = canvas.getContext("2d");

    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar la base del ahorcado
    ctx.beginPath();
    ctx.moveTo(10, 190);
    ctx.lineTo(190, 190);
    ctx.stroke();

    // Dibujar el poste vertical
    ctx.moveTo(50, 190);
    ctx.lineTo(50, 10);
    ctx.stroke();

    // Dibujar el poste horizontal
    ctx.moveTo(50, 10);
    ctx.lineTo(150, 10);
    ctx.stroke();

    // Dibujar la cuerda
    ctx.moveTo(150, 10);
    ctx.lineTo(150, 30);
    ctx.stroke();

    // Dibujar la cabeza
    if (errores > 0) {
        ctx.beginPath();
        ctx.arc(150, 50, 20, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Dibujar la soga
    if (errores > 1) {
        ctx.moveTo(150, 30);
        ctx.lineTo(150, 50);
        ctx.stroke();
    }

    // Dibujar el torso
    if (errores > 2) {
        ctx.moveTo(150, 70);
        ctx.lineTo(150, 130);
        ctx.stroke();
    }

    // Dibujar una mano
    if (errores > 3) {
        ctx.moveTo(150, 90);
        ctx.lineTo(130, 110);
        ctx.stroke();
    }

    // Dibujar la otra mano
    if (errores > 4) {
        ctx.moveTo(150, 90);
        ctx.lineTo(170, 110);
        ctx.stroke();
    }

    // Dibujar un pie
    if (errores > 5) {
        ctx.moveTo(150, 130);
        ctx.lineTo(130, 160);
        ctx.stroke();
    }

    // Dibujar el otro pie
    if (errores > 6) {
        ctx.moveTo(150, 130);
        ctx.lineTo(170, 160);
        ctx.stroke();
    }
}


function adivinarLetra() {
    const letra = document.getElementById("letra").value;
    if (palabra.includes(letra)) {
        for (let i = 0; i < palabra.length; i++) {
            if (palabra[i] === letra) {
                palabraOculta[i] = letra;
            }
        }
    } else {
        errores++;
        dibujarAhorcado();
    }
    actualizarPalabra();
    document.getElementById("letra").value = "";
    if (!palabraOculta.includes("_")) {
        alert("¡Ganaste!");
    } else if (errores >= 7) { // Una vida más
        alert("¡Perdiste! La palabra era " + palabra);
    }
}

actualizarPalabra();
dibujarAhorcado();
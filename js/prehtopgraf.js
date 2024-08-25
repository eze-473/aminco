const questions = [
  {
    question: "¿Qué es la topografía?",
    options: [
      "El estudio de las estrellas y planetas",
      " El estudio de la forma y las características de la superficie terrestre ",
      "El estudio de los animales",
      " El estudio del clima",
    ],
    correct: 2,
  },
  {
    question: "¿Qué representa una línea de contorno en un mapa topográfico?",
    options: [
      "El límite de un país",
      "Un camino o carretera",
      " Un cambio en la elevación del terreno",
      "La profundidad de un río",
    ],
    correct: 3,
  },
  {
    question:
      "¿Cómo se llama el punto más alto en un área específica en un mapa topográfico?",
    options: ["Valle", "Pico o cima ", "Meseta", "Cuenca"],
    correct: 2,
  },
  {
    question:
      "¿Qué indica un círculo cerrado con líneas de contorno en un mapa?",
    options: [
      "Un valle profundo",
      "Una colina o montaña  ",
      "Un río sinuoso",
      "Un área plana",
    ],
    correct: 2,
  },
  {
    question:
      "¿Qué herramienta se utiliza comúnmente en topografía para medir ángulos horizontales y verticales?",
    options: ["Nivel de burbuja", "Cinta métrica ", "Teodolito ", "Compás"],
    correct: 3,
  },
  {
    question:
      "¿Qué significa cuando las líneas de contorno están muy juntas en un mapa?",
    options: [
      "El terreno es plano",
      "El terreno es muy inclinado o empinado  ",
      " El área es un desierto ",
      "El terreno es bajo",
    ],
    correct: 2,
  },
  {
    question: "¿Qué es un perfil topográfico?",
    options: [
      "Un mapa de carreteras",
      "Un gráfico que muestra la elevación de un terreno a lo largo de una línea específica ",
      "Una imagen aérea ",
      "Un mapa del clima",
    ],
    correct: 2,
  },
  {
    question: "¿Qué es un punto de control en topografía?",
    options: [
      "Un punto en un río",
      "Un punto de referencia con una ubicación precisa y conocida ",
      "Un cruce de caminos ",
      "Una montaña",
    ],
    correct: 2,
  },
  {
    question: "¿Cuál es la función principal de un GPS en topografía?",
    options: [
      " Medir la presión atmosférica",
      "Proporcionar la ubicación exacta en coordenadas geográficas  ",
      "Tomar fotografías del terreno",
      "Predecir el clima",
    ],
    correct: 2,
  },
  {
    question: "¿Qué representa la escala en un mapa topográfico?",
    options: [
      "La dirección del viento",
      "La relación entre la distancia en el mapa y la distancia real en el terreno",
      "La temperatura del área",
      "El tipo de vegetación",
    ],
    correct: 2,
  },
  {
    question: "¿Qué es un levantamiento topográfico?",
    options: [
      "Un dibujo artístico de una montaña",
      "El proceso de medir y registrar las características físicas de un terreno",
      "Un tipo de mapa meteorológico",
      "La creación de un jardín",
    ],
    correct: 2,
  },
  {
    question: "¿Qué indica un relieve suave en un mapa topográfico?",
    options: [
      "Montañas altas",
      "Colinas bajas y onduladas",
      "Ríos profundos",
      "Volcanes",
    ],
    correct: 2,
  },
  {
    question:
      "¿Qué herramienta se utiliza para nivelar un terreno durante un levantamiento topográfico?",
    options: ["Regla", "Nivel de burbuja", "Péndulo", "Termómetro"],
    correct: 2,
  },
  {
    question: "¿Qué es un mapa topográfico?",
    options: [
      "Un mapa que muestra solo carreteras y caminos",
      "Un mapa que representa la elevación y la forma del terreno",
      "Un mapa político",
      "Un mapa de zonas climáticas",
    ],
    correct: 2,
  },
  {
    question: "¿Qué es la altitud?",
    options: [
      "La distancia horizontal en un mapa",
      "La altura de un punto sobre el nivel del mar",
      "La profundidad de un lago",
      "La longitud de un río",
    ],
    correct: 2,
  },
  {
    question: "¿Qué es un punto de elevación en topografía?",
    options: [
      "Un punto de cruce de caminos",
      "Un punto específico cuya elevación se conoce con precisión",
      "Un área de poca elevación",
      "Un pozo de agua",
    ],
    correct: 2,
  },
  {
    question:
      "¿Qué se necesita para realizar un levantamiento topográfico preciso?",
    options: [
      "Un equipo de navegación",
      "Herramientas como un teodolito, nivel, GPS, y cinta métrica",
      "Un equipo de jardinería",
      "Una cámara",
    ],
    correct: 2,
  },
  {
    question:
      "¿Qué representa un mapa con líneas de contorno con intervalos grandes entre ellas?",
    options: [
      "Un terreno con pendiente suave",
      "Un área con muchas colinas",
      "Un terreno muy empinado",
      "Un área con mucha vegetación",
    ],
    correct: 2,
  },
  {
    question: "¿Qué es la planimetría?",
    options: [
      "El estudio del clima",
      "El estudio de la flora y fauna",
      "La representación de las características horizontales de la superficie terrestre en un mapa",
      "La medición de la profundidad del océano",
    ],
    correct: 2,
  },
  {
    question: "¿Qué es una sección transversal en topografía?",
    options: [
      "Una vista aérea del terreno",
      "Un perfil que muestra una “corte” del terreno a lo largo de una línea específica",
      "Un mapa de carreteras",
    ],
    correct: 2,
  },
];

function loadQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const question = questions[randomIndex];

  document.getElementById("question").innerText = question.question;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () =>
      checkAnswer(button, index === question.correct, question.correct);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(button, isCorrect, correctIndex) {
  if (isCorrect) {
    button.classList.add("correct");
  } else {
    button.classList.add("incorrect");
    const correctButton =
      document.querySelectorAll("#options button")[correctIndex];
    correctButton.classList.add("correct");
  }
  setTimeout(() => {
    window.location.href = "../pages/ruleta.html";
  }, 2000);
}

window.onload = loadQuestion;

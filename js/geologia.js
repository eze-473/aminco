const questions = [
  {
    question: "¿Cuál es el mineral más duro conocido en la Tierra?",
    options: ["Oro", "Diamante", "Cuarzo", "Plata"],
    correct: 2,
  },
  {
    question:
      "¿Cómo se llama el proceso por el cual las rocas se rompen en pedazos más pequeños por la acción del viento, agua o hielo?",
    options: ["Erosión", "Compactación", "Metamorfismo", "Solidificación"],
    correct: 1,
  },
  {
    question: "¿Cuál es el nombre de la capa más externa de la Tierra?",
    options: ["Núcleo", "Manto", "Corteza", "Astenosfera"],
    correct: 2,
  },
  {
    question: "¿Qué tipo de roca se forma a partir de lava o magma?",
    options: [
      "Roca sedimentaria",
      "Roca ígnea",
      "Roca metamórfica",
      "Roca evaporítica",
    ],
    correct: 2,
  },
  {
    question:
      "¿Cómo se llama el proceso por el cual el agua se infiltra en el suelo y llena los espacios vacíos?",
    options: ["Precipitación", "Infiltración", "Evaporación", "Condensación"],
    correct: 2,
  },
  {
    question:
      "¿Qué tipo de roca está formada por la acumulación de sedimentos?",
    options: [
      "Roca ígnea",
      "Roca sedimentaria",
      "Roca metamórfica",
      "Roca volcánica",
    ],
    correct: 2,
  },
  {
    question: "¿Cuál de los siguientes es un ejemplo de un mineral?",
    options: ["Granito", "Basalto", "Cuarzo", "Arenisca"],
    correct: 3,
  },
  {
    question: "¿Qué es un fósil?",
    options: [
      "Una piedra preciosa",
      "Un mineral",
      "Restos preservados de organismos antiguos",
      "Un tipo de roca",
    ],
    correct: 3,
  },
  {
    question: "¿Qué escala se utiliza para medir la dureza de los minerales?",
    options: [
      "Escala de Mohs",
      "Escala Richter",
      "Escala de Mercalli",
      "Escala de Fahrenheit",
    ],
    correct: 1,
  },
  {
    question:
      "¿Qué tipo de roca se forma bajo altas presiones y temperaturas, pero sin llegar a fundirse?",
    options: [
      "Roca ígnea",
      "Roca sedimentaria",
      "Roca metamórfica",
      "Roca volcánica",
    ],
    correct: 3,
  },
  {
    question:
      "¿Cuál es el nombre del supercontinente que existió hace millones de años?",
    options: [
      "Gondwana",
      "Pangea  ",
      "Laurasia",
      "Rodinia",
    ],
    correct: 2,
  },
  {
    question: "¿Cómo se llama el proceso de formación de montañas?",
    options: ["Sedimentación", "Orogénesis", "Volcanismo", "Meteorización"],
    correct: 2,
  },
  {
    question: "¿Cuál es la roca más abundante en la corteza terrestre?",
    options: ["Granito", "Mármol", "Basalto", "Caliza"],
    correct: 1,
  },
  {
    question: "¿Qué tipo de roca es el mármol?",
    options: ["Ígnea", "Sedimentaria", "Metamórfica", "Evaporítica"],
    correct: 3,
  },
  {
    question:
      "¿Qué fenómeno natural ocurre cuando la energía almacenada en la Tierra se libera repentinamente?",
    options: ["Huracán", "Terremoto", "Tsunami", "Tornado"],
    correct: 2,
  },
  {
    question: "¿Cómo se llaman las capas visibles en una roca sedimentaria?",
    options: ["Granos", "Bandas", "Estratos", "Pliegues"],
    correct: 3,
  },
  {
    question: "¿Qué es un volcán inactivo?",
    options: [
      "Un volcán que ha hecho erupción recientemente",
      "Un volcán que no ha hecho erupción en mucho tiempo, pero podría hacerlo",
      "Un volcán en erupción constante",
      "Un volcán sumergido en el océano",
    ],
    correct: 2,
  },
  {
    question: "¿Qué son las placas tectónicas?",
    options: [
      "Grandes bloques de hielo flotante",
      "Capas de roca en movimiento en la superficie terrestre",
      "Fragmentos de cometas que caen a la Tierra",
      "Montañas formadas por el viento",
    ],
    correct: 2,
  },
  {
    question:
      "¿Qué gas es el principal responsable de la formación de ácido en la lluvia ácida?",
    options: ["Oxígeno", "Dióxido de carbono", "Dióxido de azufre", "Metano"],
    correct: 3,
  },
  {
    question:
      "¿Cómo se llama la roca que se forma cuando la lava se enfría y solidifica rápidamente?",
    options: ["Granito", "Obsidiana ", "Pizarra", "Arenisca"],
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

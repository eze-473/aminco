const questions = [
  {
    question: "¿Qué es la hidrología?",
    options: [
      "El estudio de los volcanes",
      "El estudio del ciclo del agua y los cuerpos de agua en la Tierra",
      "El estudio de los minerales subterráneos",
      "El estudio de la atmósfera",
    ],
    correct: 1,
  },
  {
    question:
      "¿Cómo se llama el proceso por el cual el agua de lluvia se infiltra en el suelo?",
    options: ["Sublimación", "Filtración", "Infiltración", "Transpiración"],
    correct: 2,
  },
  {
    question:
      "¿Cuál es la principal fuente de energía que impulsa el ciclo del agua?",
    options: [
      "El viento",
      "La energía solar",
      "La energía geotérmica",
      "La rotación de la Tierra",
    ],
    correct: 1,
  },
  {
    question: "¿Qué es el ciclo hidrológico?",
    options: [
      "El ciclo de nutrientes en el suelo",
      "El proceso de formación de ríos",
      "El cambio de estaciones",
      "El movimiento del agua en la Tierra, desde la atmósfera hasta la superficie y de nuevo a la atmósfera"
    ],
    correct: 3,
  },
  {
    question: "¿Qué fenómeno puede ocurrir si un acuífero se sobreexplota?",
    options: [
      "Aumento de la biodiversidad",
      "Inundaciones",
      "Hundimiento del suelo",
      "Crecimiento de glaciares",
    ],
    correct: 2,
  },
  {
    question:
      "¿Qué término describe el movimiento lento de agua a través de la tierra hacia cuerpos de agua como ríos y lagos?",
    options: ["Filtración", "Escorrentía", "Flujo base", "Precipitación"],
    correct: 2,
  },
  {
    question:
      "¿Qué tipo de perforación se usa comúnmente para explorar y evaluar yacimientos minerales?",
    options: [
      "Perforación direccional",
      "Perforación rotativa de diamante",
      "Perforación de aire comprimido",
      "Perforación manual",
    ],
    correct: 1,
  },
  {
    question: "¿Qué es un pozo de monitoreo en la minería?",
    options: [
      "Un pozo para extraer minerales",
      "Un pozo diseñado para monitorear las condiciones del agua subterránea y la estabilidad del suelo",
      "Un pozo utilizado para la ventilación",
      "Un pozo de emergencia",
    ],
    correct: 1,
  },
  {
    question:
      "¿Cuál es la principal diferencia entre la perforación de pozo y la perforación de túnel en minería?",
    options: [
      "La perforación de túnel es más rápida",
      "La perforación de pozo no se utiliza en minería",
      "La perforación de túnel requiere menos equipo",
      "La perforación de pozo se realiza verticalmente, mientras que la perforación de túnel es horizontal"
    ],
    correct: 3,
  },
  {
    question:
      "¿Qué se utiliza comúnmente para estabilizar un pozo durante la perforación?",
    options: [
      "Agua caliente",
      "Lodos de perforación",
      "Aire comprimido",
      "Cables de acero",
    ],
    correct: 1,
  },
  {
    question: "¿Qué es la hidrología minera?",
    options: [
      "El estudio de los minerales en el agua",
      "El estudio de la distribución y movimiento del agua en áreas mineras y su interacción con las actividades de extracción",
      "La gestión de ríos para el transporte de minerales",
      "El proceso de extracción de agua subterránea para uso minero",
    ],
    correct: 1,
  },
  {
    question:
      "¿Por qué es importante monitorear las aguas subterráneas en áreas mineras?",
    options: [
      "Para aumentar la producción de minerales",
      "Para evitar la contaminación de fuentes de agua potable y garantizar la sostenibilidad del recurso",
      "Para reducir el costo de las operaciones mineras",
      "Para promover el crecimiento de vegetación local",
    ],
    correct: 1,
  },
  {
    question: "¿Qué es el drenaje ácido de minas (DAM)?",
    options: [
      "El proceso de extraer ácido de las rocas",
      "La formación de agua ácida cuando el agua se filtra a través de minas y entra en contacto con minerales sulfurosos",
      "Un método para limpiar aguas subterráneas",
      "El proceso de utilizar ácido para disolver metales en minería",
    ],
    correct: 1,
  },
  {
    question:
      "¿Qué papel juega la hidrología en la planificación de un proyecto minero?",
    options: [
      "Determina el tipo de maquinaria a usar",
      "Ayuda a evaluar y mitigar los impactos en los recursos hídricos locales, tanto en cantidad como en calidad",
      "Decide la ubicación de las oficinas",
      "Define los salarios de los trabajadores",
    ],
    correct: 1,
  },
  {
    question: "¿Qué técnica se utiliza para tratar el drenaje ácido de minas?",
    options: [
      "Uso de bacterias para aumentar la acidez",
      "Tratamiento pasivo con humedales construidos o reactivos alcalinos para neutralizar el ácido",
      "Extracción del ácido para su venta",
      "Congelación del agua contaminada",
    ],
    correct: 1,
  },
  {
    question:
      "¿Qué es un pozo de monitoreo en el contexto de la hidrología minera?",
    options: [
      "Un pozo utilizado para extraer agua de mina",
      "Un pozo utilizado para observar y medir los niveles de agua subterránea y su calidad",
      "Un pozo de desagüe",
      "Un pozo para almacenar minerales extraídos",
    ],
    correct: 1,
  },
  {
    question:
      "¿Cuál es una medida preventiva común para evitar la contaminación del agua en operaciones mineras?",
    options: [
      "Dejar los residuos mineros expuestos al aire",
      "Construir barreras impermeables y sistemas de contención alrededor de las instalaciones mineras",
      "Permitir que los residuos se filtren libremente en los cuerpos de agua",
      "Utilizar agua contaminada en la agricultura",
    ],
    correct: 1,
  },
  {
    question:
      "¿Por qué es crucial la gestión del agua en las minas a cielo abierto?",
    options: [
      "Para reducir el polvo en el ambiente",
      "Para evitar inundaciones y garantizar la estabilidad de las paredes de la mina, además de proteger la calidad del agua",
      "Para aumentar la cantidad de mineral extraído",
      "Para mantener la temperatura de la mina estable",
    ],
    correct: 1,
  },
  {
    question:
      "¿Cuál es una preocupación hidrológica clave en la extracción de litio de salmueras?",
    options: [
      "La recarga natural de los acuíferos",
      "La disminución de los niveles de agua subterránea debido al bombeo intensivo de salmueras",
      "El aumento de la biodiversidad acuática",
      "La mejora de la calidad del agua potable",
    ],
    correct: 1,
  },
  {
    question:
      "¿Qué papel juegan los pozos de monitoreo en la minería de litio?",
    options: [
      "Extraer salmuera directamente para su procesamiento",
      "Controlar y medir los niveles de agua subterránea y la calidad del agua en las cercanías de las operaciones mineras",
      "Almacenar litio antes de su procesamiento",
      "Facilitar la ventilación de las instalaciones mineras",
    ],
    correct: 1,
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

const questions = [
  {
    question:
      "¿Qué es la responsabilidad social empresarial (RSE) en la minería?",
    options: [
      "El compromiso de las empresas mineras con el desarrollo sostenible y el bienestar de las comunidades",
      "La reducción de los costos operativos",
      "La maximización de las ganancias a cualquier costo",
      "La expansión de operaciones sin importar el impacto ambiental",
    ],
    correct: 0,
  },
  {
    question:
      "¿Cuál de los siguientes es un ejemplo de práctica de responsabilidad social en la minería?",
    options: [
      "Construir escuelas y hospitales en comunidades cercanas a la mina",
      "Extraer minerales sin permiso",
      "Desalojar comunidades sin compensación",
      "No cumplir con las normativas ambientales",
    ],
    correct: 0,
  },
  {
    question:
      "¿Por qué es importante la consulta previa con las comunidades locales antes de iniciar un proyecto minero?",
    options: [
      "Para evitar conflictos y asegurar que las comunidades acepten y se beneficien del proyecto",
      "Para acelerar el proceso de obtención de permisos",
      "Para reducir los costos de producción",
      "Para aumentar la extracción de minerales",
    ],
    correct: 0,
  },
  {
    question: "¿Qué es la minería responsable?",
    options: [
      "Minería que se centra únicamente en la extracción rápida",
      "Minería que sigue prácticas éticas, sostenibles y que minimiza los impactos negativos",
      "Minería sin regulaciones",
      "Minería que maximiza las ganancias",
    ],
    correct: 1,
  },
  {
    question: "¿Qué es un estudio de impacto ambiental (EIA) en minería?",
    options: [
      "Un análisis financiero de la rentabilidad de la mina",
      "Una evaluación de los posibles impactos ambientales y sociales de un proyecto minero",
      "Un informe sobre la cantidad de minerales en la mina",
      "Una predicción de los precios futuros de los minerales",
    ],
    correct: 1,
  },
  {
    question:
      "¿Qué significa el término 'licencia social para operar' en la minería?",
    options: [
      "El permiso legal otorgado por el gobierno",
      "La aceptación y apoyo continuo de una comunidad local para las operaciones mineras",
      "La adquisición de tierras para la minería",
      "La compra de maquinaria minera",
    ],
    correct: 1,
  },
  {
    question:
      "¿Qué papel juegan las empresas mineras en la mitigación del cambio climático?",
    options: [
      "Incrementar la extracción de combustibles fósiles",
      "Reducir su huella de carbono mediante prácticas sostenibles",
      "Expandir operaciones sin considerar el impacto ambiental",
      "Ignorar las regulaciones ambientales",
    ],
    correct: 1,
  },
  {
    question: "¿Qué es el desarrollo sostenible en el contexto de la minería?",
    options: [
      "La explotación rápida de recursos antes de que se agoten",
      "La extracción de recursos de manera que se satisfagan las necesidades presentes sin comprometer las futuras",
      "La minimización de costos sin importar el impacto ambiental",
      "La producción en masa sin responsabilidad social",
    ],
    correct: 1,
  },
  {
    question:
      "¿Cuál de los siguientes es un ejemplo de práctica ética en la minería?",
    options: [
      "Usar mano de obra infantil para reducir costos",
      "Garantizar condiciones laborales seguras y justas para los trabajadores",
      "Descuidar la salud y seguridad de los empleados",
      "Operar sin cumplir con las leyes ambientales",
    ],
    correct: 1,
  },
  {
    question: "¿Por qué es importante la transparencia en la industria minera?",
    options: [
      "Para mantener la competitividad en el mercado",
      "Para generar confianza y evitar la corrupción en la gestión de los recursos mineros",
      "Para ocultar los impactos ambientales",
      "Para acelerar el proceso de extracción",
    ],
    correct: 1,
  },
  {
    question: "¿Qué es la gestión de residuos en la minería?",
    options: [
      "El almacenamiento indefinido de residuos sin tratamiento",
      "El manejo adecuado y seguro de los desechos generados por la minería",
      "La quema de residuos a cielo abierto",
      "El vertido de residuos en cuerpos de agua",
    ],
    correct: 1,
  },
  {
    question:
      "¿Qué puede hacer una empresa minera para apoyar el desarrollo económico local?",
    options: [
      "Contratar a trabajadores de otras regiones",
      "Invertir en infraestructura y emplear a la población local",
      "Ignorar las necesidades de la comunidad",
      "Extraer recursos sin aportar a la economía local",
    ],
    correct: 1,
  },
  {
    question:
      "¿Qué es la minería artesanal y de pequeña escala (MAPE)?",
    options: [
      "La minería realizada por grandes corporaciones",
      "La minería realizada por individuos o pequeños grupos con métodos tradicionales",
      "La minería completamente automatizada",
      "La minería que no requiere permisos",
    ],
    correct: 1,
  },
  {
    question:
      "¿Qué significa realizar una compensación ambiental en minería?",
    options: [
      "Ignorar los daños ambientales causados por la minería",
      "Tomar medidas para reparar o mitigar los impactos ambientales negativos",
      "Expandir operaciones sin consideración del medio ambiente",
      "Reducir los costos operativos a costa del medio ambiente",
    ],
    correct: 1,
  },
  {
    question: "¿Cómo pueden las empresas mineras contribuir a la conservación de la biodiversidad?",
    options: [
      "Destruyendo hábitats naturales sin reforestación",
      " Implementando programas de restauración ecológica y conservación de hábitats",
      "Expandiendo las operaciones mineras en áreas protegidas",
      "Desviando cursos de agua sin plan de mitigación",
    ],
    correct: 1,
  },
  {
    question: "¿Por qué es fundamental el diálogo con las comunidades indígenas en proyectos mineros?",
    options: [
      "Para evitar la obtención de permisos",
      "Para respetar y proteger sus derechos y garantizar que se beneficien del proyecto",
      "Para evitar el pago de regalías",
      "Para acelerar la extracción de recursos",
    ],
    correct: 1,
  },
  {
    question:
      "¿Qué significa el término “minería inclusiva”?",
    options: [
      "Minería que solo beneficia a las grandes corporaciones",
      "Minería que considera y beneficia a todas las partes interesadas, incluidas las comunidades locales",
      "Minería realizada sin regulaciones",
      "Minería que excluye a los grupos minoritarios",
    ],
    correct: 1,
  },
  {
    question:
      "¿Qué es la minería responsable con el agua?",
    options: [
      "Usar toda el agua disponible sin preocuparse por el impacto",
      "Gestionar y conservar el agua, minimizando el impacto en los recursos hídricos locales",
      "Evitar cualquier tipo de uso del agua",
      "Contaminar fuentes de agua sin tratamiento",
    ],
    correct: 1,
  },
  {
    question: "¿Qué es la remediación en el contexto de la minería?",
    options: [
      "El abandono de un sitio minero después de la extracción",
      "La restauración del sitio minero a su estado natural o a una condición segura después de la explotación",
      "La ampliación de la zona minera",
      "La extracción continua sin control",
    ],
    correct: 1,
  },
  {
    question:
      "¿Qué puede hacer una empresa minera para reducir su impacto ambiental?",
    options: [
      "Operar sin ninguna regulación",
      "Implementar tecnologías limpias y procesos más eficientes",
      "Maximizar la producción sin considerar el medio ambiente",
      "Ignorar las normativas locales y globales",
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

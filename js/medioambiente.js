const questions = [
    {
        question: "¿Qué es la responsabilidad ambiental corporativa en el contexto de la minería?",
        options: [
            "Maximizar la producción minera",
            "Cumplir con las regulaciones y minimizar el impacto ambiental",
            "Aumentar las ganancias sin considerar el medio ambiente",
            "Explorar nuevas áreas sin estudios ambientales"
        ],
        correct: 1
    },
    {
        question: "¿Qué medida deben tomar las empresas mineras para minimizar la contaminación del agua?",
        options: [
            "Descargar los desechos directamente en los ríos",
            "Implementar sistemas de tratamiento de aguas residuales",
            "Utilizar más químicos en la extracción de minerales",
            "Evitar la reforestación en las áreas cercanas"
        ],
        correct: 1
    },
    {
        question: "¿Qué es la restauración ecológica en minería?",
        options: [
            "Restaurar el terreno y la vegetación a su estado original",
            "Convertir las minas en áreas urbanas",
            "Abandonar las minas después de la explotación",
            "Dejar los residuos en el sitio"
        ],
        correct: 3
    },
    {
        question: "¿Cuál es el objetivo de un Estudio de Impacto Ambiental (EIA) en minería?",
        options: [
            "Aumentar la eficiencia en la extracción de minerales",
            "Identificar y mitigar los posibles impactos ambientales de un proyecto minero",
            "Promover la deforestación para facilitar la minería",
            "Obtener permisos sin evaluar los efectos ambientales"
        ],
        correct: 1
    },
    {
        question: "¿Qué debe hacer una empresa minera para manejar adecuadamente los residuos sólidos?",
        options: [
            "Implementar prácticas de reciclaje",
            "Quemarlos al aire libre",
            "Enterrarlos en cualquier lugar",
            "Tirarlos en cuerpos de agua cercanos"
        ],
        correct: 3
    },
    {
        question: "¿Qué es la minería sostenible?",
        options: [
            "Minería que equilibra la extracción de recursos con la conservación del medio ambiente",
            "Minería realizada sin estudios de impacto",
            "Minería enfocada solo en maximizar los beneficios económicos",
            "Minería que no tiene en cuenta el medio ambiente"
        ],
        correct: 4
    },
    {
        question: "¿Qué acción demuestra la responsabilidad ambiental corporativa de una empresa minera?",
        options: [
            "Invertir solo en tecnología de extracción",
            "Contribuir al desarrollo de las comunidades locales afectadas",
            "Promover la reforestación después de la extracción",
            "Ignorar las preocupaciones ambientales"
        ],
        correct: 2
    },
    {
        question: "¿Cómo pueden las empresas mineras prevenir la deforestación en sus operaciones?",
        options: [
            "Planificando y limitando las áreas de impacto, y restaurando áreas afectadas",
            "No tomando ninguna acción",
            "Desviando ríos para facilitar la minería",
            "Utilizando maquinaria pesada en todas las áreas"
        ],
        correct: 4
    },
    {
        question: "¿Qué rol juega la transparencia en la responsabilidad ambiental de una empresa minera?",
        options: [
            "Publicar y comunicar abiertamente los impactos ambientales y las medidas tomadas",
            "Mantener los datos confidenciales",
            "Ocultar los informes ambientales",
            "Evitar las auditorías ambientales"
        ],
        correct: 3
    },
    {
        question: "¿Qué es la minería con “cero residuos”?",
        options: [
            "Minería que busca reducir al máximo la generación de residuos y reciclar todo lo posible",
            "Minería sin extracción de minerales",
            "Minería que produce residuos y los almacena sin tratamiento",
            "Minería que no utiliza ningún tipo de energía"
        ],
        correct: 2
    },
    {
        question: "¿Cómo pueden las empresas mineras reducir su huella de carbono?",
        options: [
            "Implementando energías renovables y mejorando la eficiencia energética",
            "Incrementando la cantidad de maquinaria pesada",
            "Realizando más exploraciones sin evaluar el impacto ambiental",
            "Utilizando energía proveniente de combustibles fósiles"
        ],
        correct: 4
    },
    {
        question: "¿Qué importancia tiene la consulta previa con las comunidades en la minería?",
        options: [
            "Es esencial para obtener la aceptación y colaborar en la mitigación de impactos",
            "No es necesaria si la mina es pequeña",
            "Es solo un trámite para obtener permisos",
            "Es una formalidad sin importancia"
        ],
        correct: 4
    },
    {
        question: "¿Qué es la responsabilidad ambiental corporativa en el contexto de la minería?",
        options: [
            "Maximizar la producción minera",
            "Cumplir con las regulaciones y minimizar el impacto ambiental",
            "Aumentar las ganancias sin considerar el medio ambiente",
            "Explorar nuevas áreas sin estudios ambientales"
        ],
        correct: 1
    },
    {
        question: "¿Qué medida deben tomar las empresas mineras para minimizar la contaminación del agua?",
        options: [
            "Descargar los desechos directamente en los ríos",
            "Implementar sistemas de tratamiento de aguas residuales",
            "Utilizar más químicos en la extracción de minerales",
            "Evitar la reforestación en las áreas cercanas"
        ],
        correct: 1
    },
    {
        question: "¿Qué es la restauración ecológica en minería?",
        options: [
            "Restaurar el terreno y la vegetación a su estado original",
            "Convertir las minas en áreas urbanas",
            "Abandonar las minas después de la explotación",
            "Dejar los residuos en el sitio"
        ],
        correct: 3
    },
    {
        question: "¿Cuál es el objetivo de un Estudio de Impacto Ambiental (EIA) en minería?",
        options: [
            "Identificar y mitigar los posibles impactos ambientales de un proyecto minero",
            "Promover la deforestación para facilitar la minería",
            "Obtener permisos sin evaluar los efectos ambientales",
            "Aumentar la eficiencia en la extracción de minerales"
        ],
        correct: 4
    },
    {
        question: "¿Qué debe hacer una empresa minera para manejar adecuadamente los residuos sólidos?",
        options: [
            "Enterrarlos en cualquier lugar",
            "Implementar prácticas de reciclaje",
            "Quemarlos al aire libre",
            "Tirarlos en cuerpos de agua cercanos"
        ],
        correct: 1
    },
    {
        question: "¿Qué es la minería sostenible?",
        options: [
            "Minería que equilibra la extracción de recursos con la conservación del medio ambiente",
            "Minería que no tiene en cuenta el medio ambiente",
            "Minería realizada sin estudios de impacto",
            "Minería enfocada solo en maximizar los beneficios económicos"
        ],
        correct: 2
    },
    {
        question: "¿Qué acción demuestra la responsabilidad ambiental corporativa de una empresa minera?",
        options: [
            "Invertir solo en tecnología de extracción",
            "Contribuir al desarrollo de las comunidades locales afectadas",
            "Promover la reforestación después de la extracción",
            "Ignorar las preocupaciones ambientales"
        ],
        correct: 2
    },
    {
        question: "¿Cómo pueden las empresas mineras prevenir la deforestación en sus operaciones?",
        options: [
            "Planificando y limitando las áreas de impacto, y restaurando áreas afectadas",
            "No tomando ninguna acción",
            "Utilizando maquinaria pesada en todas las áreas",
            "Desviando ríos para facilitar la minería"
        ],
        correct: 3
    },
    {
        question: "¿Qué rol juega la transparencia en la responsabilidad ambiental de una empresa minera?",
        options: [
            "Publicar y comunicar abiertamente los impactos ambientales y las medidas tomadas",
            "Mantener los datos confidenciales",
            "Evitar las auditorías ambientales",
            "Ocultar los informes ambientales"
        ],
        correct: 4
    },
    {
        question: "¿Qué es la minería con “cero residuos”?",
        options: [
            "Minería que busca reducir al máximo la generación de residuos y reciclar todo lo posible",
            "Minería que produce residuos y los almacena sin tratamiento",
            "Minería sin extracción de minerales",
            "Minería que no utiliza ningún tipo de energía"
        ],
        correct: 3
    },
    {
        question: "¿Cómo pueden las empresas mineras reducir su huella de carbono?",
        options: [
            "Utilizando energía proveniente de combustibles fósiles",
            "Implementando energías renovables y mejorando la eficiencia energética",
            "Incrementando la cantidad de maquinaria pesada",
            "Realizando más exploraciones sin evaluar el impacto ambiental"
        ],
        correct: 1
    },
    {
        question: "¿Qué importancia tiene la consulta previa con las comunidades en la minería?",
        options: [
            "Es esencial para obtener la aceptación y colaborar en la mitigación de impactos",
            "Es una formalidad sin importancia",
            "No es necesaria si la mina es pequeña",
            "Es solo un trámite para obtener permisos"
        ],
        correct: 2
    },
    {
        question: "¿Qué medida es fundamental para la protección de la biodiversidad en áreas mineras?",
        options: [
            "Ignorar las áreas protegidas",
            "Establecer y respetar zonas de conservación dentro y alrededor de las áreas mineras",
            "Expandir la minería a áreas silvestres",
            "Usar pesticidas para controlar la vegetación"
        ],
        correct: 1
    },
    {
        question: "¿Qué es la remediación ambiental en el contexto minero?",
        options: [
            "Dejar los sitios mineros como están después de la explotación",
            "Restaurar los sitios mineros degradados a condiciones seguras y sostenibles",
            "Continuar la minería sin restauración",
            "Expandir las operaciones mineras sin control"
        ],
        correct: 1
    },
    {
        question: "¿Por qué es importante la educación ambiental en la minería?",
        options: [
            "Para concienciar a empleados y comunidades sobre la importancia de proteger el medio ambiente",
            "Para reducir el costo de las operaciones",
            "Para enseñar a los trabajadores técnicas de extracción",
            "Para aumentar la velocidad de extracción"
        ],
        correct: 3
    },
    {
        question: "¿Qué significa la certificación ambiental para una empresa minera?",
        options: [
            "Un requisito legal sin impacto en las operaciones",
            "Una insignia para mejorar las ventas",
            "Un permiso para realizar cualquier tipo de operación minera",
            "Un reconocimiento de altos estándares en la gestión ambiental"
        ],
        correct: 4
    },
    {
        question: "¿Qué papel juegan los auditores ambientales en la minería?",
        options: [
            "Producir informes favorables sin revisión",
            "Evaluar y asegurar el cumplimiento de las normativas ambientales",
            "Aumentar la producción minera",
            "Evitar la supervisión de las operaciones mineras"
        ],
        correct: 1
    },
    {
        question: "¿Cómo pueden las empresas mineras gestionar los impactos sociales de sus operaciones?",
        options: [
            "Ignorando las preocupaciones de las comunidades locales",
            "Participando en diálogos comunitarios y apoyando el desarrollo local",
            "Centrando todos los esfuerzos solo en la extracción",
            "Expandiendo sin informar a las comunidades"
        ],
        correct: 1
    },
    {
        question: "¿Qué es el Plan de Cierre de Minas?",
        options: [
            "Un plan que establece cómo se rehabilitará el área afectada una vez finalizadas las operaciones mineras",
            "Un permiso para extender la vida útil de la mina",
            "Un documento que detalla cómo se abandonará una mina sin restauración",
            "Una estrategia para abrir nuevas áreas mineras"
        ],
        correct: 3
    },
    {
        question: "¿Qué es el monitoreo ambiental en minería?",
        options: [
            "La evaluación continua de los impactos ambientales de las actividades mineras para tomar medidas correctivas",
            "Una forma de incrementar los costos operativos",
            "Una práctica solo necesaria en grandes minas",
            "Una actividad opcional que no afecta las operaciones"
        ],
        correct: 4
    }
];


function loadQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];

    document.getElementById('question').innerText = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(button, index === question.correct, question.correct);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(button, isCorrect, correctIndex) {
    if (isCorrect) {
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
        const correctButton = document.querySelectorAll('#options button')[correctIndex];
        correctButton.classList.add('correct');
    }
    setTimeout(() => {
        window.location.href = '../pages/ruleta.html';
    }, 2000);
}

window.onload = loadQuestion;
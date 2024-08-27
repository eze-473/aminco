const questions = [
    {
        question: "¿Cuál es uno de los minerales más comúnmente extraídos en la minería?",
        options: ["Petróleo", "Carbón", "Agua", "Nitrógeno"],
        correct: 2
    },
    {
        question: "¿Qué método se utiliza comúnmente en la minería subterránea para extraer minerales?",
        options: ["Perforación y voladura", "Dragado", "Evaporación", "Reforestación"],
        correct: 1
    },
    {
        question: "¿Qué es una mina de placer?",
        options: ["Una mina ubicada en el océano", "Una mina donde se extraen minerales valiosos de depósitos aluviales en ríos y arroyos", "Una mina que solo produce sal", "Una mina donde se extraen solo metales preciosos"],
        correct: 2
    },
    {
        question: "¿Qué es la lixiviación en la minería?",
        options: ["Un proceso de extracción de minerales disolviéndolos en un solvente", "Una técnica para medir la pureza del mineral", "Un método para fundir minerales a altas temperaturas", "Una práctica de minería submarina"],
        correct: 1
    },
    {
        question: "¿Cuál es uno de los principales desafíos de la minería en regiones remotas?",
        options: ["La abundancia de infraestructura", "La facilidad de transporte", "El acceso limitado a recursos y mano de obra", "La sobrepoblación"],
        correct: 3
    },
    {
        question: "¿Qué es el litio?",
        options: ["Un metal precioso utilizado en joyería", "Un metal ligero utilizado en baterías recargables", "Un tipo de roca volcánica", "Un mineral que se encuentra en la sal del mar"],
        correct: 2
    },
    {
        question: "¿En qué tipo de productos se utiliza mayormente el litio?",
        options: ["Joyería y ornamentos","Fertilizantes agrícolas", "Productos de limpieza","Baterías para dispositivos electrónicos y vehículos eléctricos"],
        correct: 4
    },
    {
        question: "¿Qué país es uno de los mayores productores de litio a nivel mundial?",
        options: ["Sudáfrica", "Australia", "Chile", "Brasil"],
        correct: 3
    },
    {
        question: "¿Cuál es el principal uso del oro en la actualidad?",
        options: ["Producción de energía", "Fabricación de circuitos electrónicos y joyería", "Construcción de maquinaria pesada", "Agricultura"],
        correct: 2
    },
    {
        question: "¿Qué es una salmuera de litio?",
        options: ["Un depósito de litio en forma sólida", "Una solución de sal rica en litio encontrada en lagos salados", "Un tipo de mineral metálico", "Un componente utilizado en la minería de oro"],
        correct: 2
    },
    {
        question: "¿Qué es la lixiviación en la minería de oro?",
        options: ["Un proceso de perforación profunda",  "Una técnica de transporte de minerales", "Un método para extraer oro utilizando soluciones químicas como el cianuro", "Un proceso de fundición de oro"],
        correct: 3
    },
    {
        question: "¿Cómo se extrae comúnmente el litio de los depósitos de salmuera?",
        options: ["Evaporando el agua para concentrar el litio","Perforando y extrayendo directamente",  "Fundiendo las rocas que lo contienen", "Triturando el mineral en polvo"],
        correct: 1
    },
    {
        question: "¿En qué tipo de yacimientos se encuentra el oro más comúnmente?",
        options: ["En la superficie de las montañas", "En vetas subterráneas y aluviones de ríos", "En desiertos de arena", "En campos de cultivo"],
        correct: 2
    },
    {
        question: "¿Qué es el triángulo del litio?",
        options: ["Una región entre Chile, Argentina y Bolivia que contiene grandes reservas de litio", "Un método para refinar litio", "Un tipo de mina de litio en forma triangular", "Un instrumento de medición en minería"],
        correct: 1
    },
    {
        question: "¿Qué metal se encuentra comúnmente junto al litio en los depósitos de salmuera?",
        options: ["Plata", "Plomo ", " Hierro ", " Potasio "],
        correct: 4
    },
    {
        question: "¿Qué es una batería de iones de litio?",
        options: ["Un tipo de batería desechable", "Una batería utilizada solo en vehículos de lujo", "Una batería de uso industrial", "Una batería recargable que utiliza litio como material principal "],
        correct: 4
    },
    {
        question: "Qué hace que el litio sea un material tan valioso para las baterías?",
        options: ["Su peso pesado", "Su alta capacidad de almacenamiento de energía y ligereza ", "Su dureza", "Su resistencia al calor extremo"],
        correct: 2
    },
    {
        question: "¿Qué técnica se usa comúnmente para recuperar litio de minerales como la espodumena?",
        options: ["Flotación y separación magnética", "Procesamiento térmico seguido de lixiviación", "Fundición directa", "Perforación subterránea"],
        correct: 2
    },
    {
        question: "¿Qué es la minería de roca dura en el contexto del oro?",
        options: [" Extracción de oro de depósitos aluviales", "Minería en el fondo del mar", "Minería en la que el oro se extrae de rocas sólidas ", "Extracción de oro mediante lixiviación en pilas"],
        correct: 1
    },
    {
        question: "¿Por qué el litio es un recurso estratégico en la transición energética global?",
        options: ["Porque es raro y difícil de encontrar", "Porque es esencial para la fabricación de baterías para almacenamiento de energía renovable", "Porque se utiliza principalmente en la construcción", "Porque es el único metal que se puede reciclar completamente "],
        correct: 2
    }
    
    ]


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
function handleColorChange() {
  var excludeColors = document.getElementById('toggle4').checked;
  localStorage.setItem('excludeColors', excludeColors);
}

document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;
  var isAnimated = true; // Flag to track the background state
  var resultContainer = document.getElementById("resultContainer");

  body.addEventListener("click", function () {
    if (!resultContainer.classList.contains("hidden")) {
      return; // Prevent background change when the result screen is displayed
    }

    if (isAnimated) {
      body.style.background = "#333"; // Change the body background to a still color
      body.style.animation = "none"; // Remove the animation
    } else {
      body.style.background = "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
      body.style.animation = "gradient 15s ease infinite"; // Apply the animation again
    }
    isAnimated = !isAnimated; // Toggle the flag
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var excludeColors = localStorage.getItem('excludeColors');
  if (excludeColors === 'true') {
    document.body.classList.add('exclude-red-green');
    // Apply styles to elements accordingly
    // Other elements and styles to update as needed
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var countdownElement = document.getElementById("countdown");
  var gameElement = document.getElementById("game");
  var stopwatchElement = document.getElementById("stopwatch");
  var count = 3;
  var timerStarted = false;

  function startCountdown() {
    var countdownInterval = setInterval(function () {
      countdownElement.innerText = count;
      count--;

      if (count < 0 && !timerStarted) { // Check if the countdown has reached 0 and the timer has not started
        clearInterval(countdownInterval); // Stop the countdown
        countdownElement.style.display = "none"; // Hide the countdown element
        gameElement.classList.remove("hidden"); // Show the game element
        startTimer();
        timerStarted = true; // Set the flag to true
      }
    }, 1000);
  }

  function startTimer() {
    var startTime = Date.now();

    setInterval(function () {
      var elapsedTime = Date.now() - startTime;
      var seconds = Math.floor(elapsedTime / 1000);
      var minutes = Math.floor(seconds / 60);
      seconds %= 60;

      var displayTime = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
      stopwatchElement.innerText = displayTime;
    }, 1000);
  }

  startCountdown();
});

let score = 0;

let currentQuestionIndex = 0; // Add a variable to track the current question index

function checkAnswer(button) {
  var resultContainer = document.getElementById("resultContainer");
  var resultText = document.getElementById("resultText");

  var selectedOption = button.innerText.trim().toLowerCase(); // Trim and convert to lowercase

  var currentQuestion = additionalQuestions[currentQuestionIndex]; // Retrieve the current question
  var correctAnswer = currentQuestion.correctAnswer.trim().toLowerCase(); // Trim and convert to lowercase

  console.log("Selected Option:", selectedOption);
  console.log("Correct Answer:", correctAnswer);

  if (selectedOption === correctAnswer) {
    resultText.innerText = translateToCurrentLanguage("Correct!");
    resultText.style.color = "green";
    score++;
  } else {
    resultText.innerText = translateToCurrentLanguage("Sorry, you got that wrong.");
    resultText.style.color = "red";
  }

  resultContainer.classList.remove("hidden");







  function translateToCurrentLanguage(text, language) {
    if (language === 'es') {
      switch (text) {
        case 'Sorry, you got that wrong.':
          return 'Lo siento, esa no es la respuesta correcta.';
        case 'Correct!':
          return '¡Correcto!';
        // Add more translations when john remero needs 
        default:
          return text;
      }
    } else {
      return text;
    }
  }


  resultContainer.classList.remove("hidden");

  setTimeout(function () {
    resultContainer.classList.add("hidden");

    currentQuestionIndex++; // Move to the next question

    if (currentQuestionIndex < additionalQuestions.length) {
      loadAdditionalQuestions(); // Load the next question
    } else {
      window.location.href = "QuizDone.html";
      window.location.href = `quizdone.html?score=${score}`;
    }
  }, 2000);
}

function translateToCurrentLanguage(text, language) {
  if (language === 'es') {
    // Translate text to Spanish logic here
    // Placeholder: Replace with actual translation logic
    return text; // Placeholder, replace with actual translation logic
  } else {
    return text;
  }
}

// Additional Questions
var additionalQuestions = [ //FIX HUH WTF???
  {
    question: "What happens during the ‘fetch’ step of the fetch–execute cycle?",
    correctAnswer: "An instruction is copied from memory and placed in the instruction register",
    options: ["The program counter is incremented", "A program is copied into the CPU for execution", "Data needed to carry out an instruction in the CPU are moved from memory", "An instruction is copied from memory and placed in the instruction register"],
  },

  {
    question: "A developer uses existing modules of code to meet a client’s needs quickly. Which development approach is being used?",
    correctAnswer: "Rapid application development",
    options: ["Agile", "End user", "Prototyping", "Rapid application development"],
  },

  {
    question: "Which of the following best describes load testing?", //FIX???
    correctAnswer: "Testing a system with large amounts of data",
    options: ["Testing every function of a system", "Testing a system with large amounts of data", "Testing a system with every transaction type", "Testing of a system by different types of users"],
  },

  {
    question: "What is a benefit of outsourcing parts of a large software development project?",
    correctAnswer: "It provides access to skilled personnel when needed",
    options: ["It ensures protection of trade secrets", "It makes it easier to oversee work in progress.", "It provides access to skilled personnel when needed", "It helps maintain the consistency of code and documentation"],
  },

  {
    question: "Version control software, Gantt chart generators and test data generators are all examples of",
    correctAnswer: "CASE tools",
    options: ["CASE tools", "data modelling tools", "project management tools", "system documentation tools"],
  },

  {
    question: "What is the purpose of a post-implementation review",
    correctAnswer: "To help evaluate the new system based on client feedback",
    options: ["To check that the overall system functions correctly", "To discuss the results of the acceptance testing process", "To help evaluate the new system based on client feedback", "To demonstrate the features of the new system to the clien"],
  },

  {
    question: "Which of the following would be best to use to show the planned sequence of events for a development process?",
    correctAnswer: "Gantt chart",
    options: ["Logbook", "Gantt chart", "Context diagram", "Program flowchart"],
  },

  {
    question: "Which of the following is most effective in preventing software piracy",
    correctAnswer: "Using an encryption key",
    options: ["Using a site licence", "Using an encryption key", "Making a file ‘Read-only’", "Providing source code instead of compiled code"],
  },

  {
    question: "Which of the following is the most appropriate data type for storing telephone numbers?",
    correctAnswer: "String",
    options: ["String", "Record", "Integer", "Floating point "],
  },

  {
    question: "Which of the following is NOT a valid reason for maintaining software?",
    correctAnswer: "The increased speed of the national broadband network (NBN) allows users to download software more efficiently",
    options: ["Existing software also has to work on hand-held devices, such as tablets", "Equal opportunity legislation demands greater inclusivity in user interfaces", "There are legislative changes, such as the introduction of the GST, requiring added functionality", "The increased speed of the national broadband network (NBN) allows users to download software more efficiently"],
  },

  // Add more questions following the same structure
];



function translateToSpanish() {
  const elementsToTranslate = document.querySelectorAll("[data-i18n]");

  for (const element of elementsToTranslate) {
    const spanishText = element.dataset.i18nEs;
    if (spanishText) {
      element.textContent = spanishText;
    } //FIX THIS
  }

  document.title = translateToCurrentLanguage(document.title); // Translate the page title
  const inputFields = document.querySelectorAll("input, textarea");
  for (const inputField of inputFields) {
    if (inputField.placeholder) {
      inputField.placeholder = translateToCurrentLanguage(inputField.placeholder); // Translate the placeholder text
    }
  }
}

document.getElementById("language-select").addEventListener("change", function () {
  if (this.value === "es") {
    translateToSpanish();
    loadAdditionalQuestions('es'); // Pass 'es' for Spanish translations
  } else {
    // Implement logic for other languages as needed
  }
});

function loadAdditionalQuestions(language) { //FIX THIS
  var questionBox = document.querySelector(".question-box"); //FIX THIS
  var optionsContainer = document.querySelector("#optionsContainer"); //FIX THIS

  if (questionBox && optionsContainer && currentQuestionIndex < additionalQuestions.length) { // Check if required elements exist and if there are more questions to load
    var currentQuestion = additionalQuestions[currentQuestionIndex]; // Retrieve the current question

    questionBox.querySelector(".question").textContent = translateToCurrentLanguage(currentQuestion.question, language); // Translate the question
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(function (option) {
      var button = document.createElement("button");
      button.textContent = translateToCurrentLanguage(option, language);
      button.classList.add("option");
      button.setAttribute("onclick", "checkAnswer(this)");
      optionsContainer.appendChild(button);
    });
    // this line of code is my end for it all i cant do it no more 
    // this whole function barely works and i cant do it anymore

    var gameElement = document.getElementById("game"); // Get the game element
    var gameTextElement = gameElement.querySelector(".game"); // Get the game text element
    if (gameTextElement) {
      gameTextElement.textContent = translateToCurrentLanguage("Game", language); // Translate the game text
    }
  } else {
    console.error("Required elements not found or end of questions reached.");
  }
}

loadAdditionalQuestions(); // Load questions initially

function translateToSpanish() {
  // Existing translation logic

  // Translate additionalQuestions to Spanish
  var spanishQuestions = [
    {
      question: "¿Qué sucede durante el paso de 'fetch' del ciclo fetch–execute?",
      correctAnswer: "Una instrucción se copia desde la memoria y se coloca en el registro de instrucciones",
      options: ["El contador del programa se incrementa", "Un programa se copia en la CPU para su ejecución", "Los datos necesarios para llevar a cabo una instrucción en la CPU se mueven desde la memoria", "Una instrucción se copia desde la memoria y se coloca en el registro de instrucciones"],
    },
    {
      question: "¿Un desarrollador utiliza módulos existentes de código para satisfacer rápidamente las necesidades de un cliente? ¿Qué enfoque de desarrollo se está utilizando?",
      correctAnswer: "Desarrollo rápido de aplicaciones",
      options: ["Ágil", "Usuario final", "Prototipado", "Desarrollo rápido de aplicaciones"],
    },
    {
      question: "¿Cuál de las siguientes describe mejor las pruebas de carga?",
      correctAnswer: "Pruebas de un sistema con grandes cantidades de datos",
      options: ["Pruebas de cada función de un sistema", "Pruebas de un sistema con grandes cantidades de datos", "Pruebas de un sistema con cada tipo de transacción", "Pruebas de un sistema por diferentes tipos de usuarios"],
    },
    {
      question: "¿Cuál es un beneficio de externalizar partes de un proyecto grande de desarrollo de software?",
      correctAnswer: "Proporciona acceso a personal cualificado cuando se necesita",
      options: ["Garantiza la protección de secretos comerciales", "Facilita la supervisión del trabajo en progreso.", "Proporciona acceso a personal cualificado cuando se necesita", "Ayuda a mantener la consistencia del código y la documentación"],
    },
    {
      question: "El software de control de versiones, los generadores de diagramas de Gantt y los generadores de datos de prueba son ejemplos de",
      correctAnswer: "Herramientas CASE",
      options: ["Herramientas CASE", "herramientas de modelado de datos", "herramientas de gestión de proyectos", "herramientas de documentación de sistemas"],
    },
    {
      question: "¿Cuál es el propósito de una revisión posterior a la implementación?",
      correctAnswer: "Ayudar a evaluar el nuevo sistema basándose en la retroalimentación del cliente",
      options: ["Comprobar que el sistema en general funciona correctamente", "Discutir los resultados del proceso de pruebas de aceptación", "Ayudar a evaluar el nuevo sistema basándose en la retroalimentación del cliente", "Demostrar las características del nuevo sistema al cliente"],
    },
    {
      question: "¿Cuál de los siguientes sería mejor usar para mostrar la secuencia planificada de eventos para un proceso de desarrollo?",
      correctAnswer: "Diagrama de Gantt",
      options: ["Libro de registro", "Diagrama de Gantt", "Diagrama de contexto", "Flujo de programa"],
    },
    {
      question: "¿Cuál de los siguientes es más efectivo para prevenir la piratería de software?",
      correctAnswer: "Usar una clave de cifrado",
      options: ["Usar una licencia de sitio", "Usar una clave de cifrado", "Hacer un archivo 'Solo lectura'", "Proporcionar código fuente en lugar de código compilado"],
    },
    {
      question: "¿Cuál es el tipo de datos más apropiado para almacenar números de teléfono?",
      correctAnswer: "Cadena de texto",
      options: ["Cadena de texto", "Registro", "Entero", "Punto flotante"],
    },
    {
      question: "¿Cuál de los siguientes NO es un motivo válido para mantener el software?",
      correctAnswer: "La mayor velocidad de la red nacional de banda ancha (NBN) permite a los usuarios descargar software de manera más eficiente",
      options: ["El software existente también debe funcionar en dispositivos portátiles, como tabletas", "La legislación de igualdad de oportunidades exige una mayor inclusividad en las interfaces de usuario", "Hay cambios legislativos, como la introducción del GST, que requieren funcionalidades adicionales", "La mayor velocidad de la red nacional de banda ancha (NBN) permite a los usuarios descargar software de manera más eficiente"],
    },
  ];

  // Update additionalQuestions to use Spanish translations when language is set to 'es'
  additionalQuestions = spanishQuestions;
}

document.getElementById("language-select").addEventListener("change", function () {
  if (this.value === "es") {
    translateToSpanish();
    loadAdditionalQuestions('es'); // Pass 'es' for Spanish translations
  } else {
    // Implement logic for other languages as needed
  }
});
// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function () {
  // Get references to elements in the HTML document
  var countdownElement = document.getElementById("countdown");
  var gameElement = document.getElementById("game");
  var stopwatchElement = document.getElementById("stopwatch"); // Added stopwatch element reference
  var count = 3;
  var timerStarted = false;

  // Function to start the countdown
  function startCountdown() {
    var countdownInterval = setInterval(function () {
      countdownElement.innerText = count;
      count--;

      // Start the game when the countdown finishes
      if (count < 0 && !timerStarted) {
        clearInterval(countdownInterval);
        countdownElement.style.display = "none";
        gameElement.classList.remove("hidden");
        startTimer(); // Call function to start the stopwatch
        timerStarted = true;
      }
    }, 1000);
  }

  // Function to start the stopwatch
  function startTimer() {
    var startTime = Date.now();

    setInterval(function () {
      var elapsedTime = Date.now() - startTime;
      var seconds = Math.floor(elapsedTime / 1000);
      var minutes = Math.floor(seconds / 60);
      seconds %= 60;

      // Format and display the elapsed time
      var displayTime = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
      stopwatchElement.innerText = displayTime;
    }, 1000);
  }

  // Start the countdown when the page loads
  startCountdown();
});

// Variable to store the score
let score = 0;

// Function to check the selected answer
function checkAnswer(button) {
  var resultContainer = document.getElementById("resultContainer");
  var resultText = document.getElementById("resultText");

  // Get the selected option and correct answer
  var selectedOption = button.innerText.toLowerCase();
  var correctAnswer = additionalQuestions[0].correctAnswer.toLowerCase(); // Default value for correct answer

  // Check if the selected answer is correct
  if (selectedOption === correctAnswer) {
    resultText.innerText = "Correct!";
    resultText.style.color = "green";
    score++; // Increment the score for a correct answer
  } else {
    resultText.innerText = "Sorry, you got that wrong.";
    resultText.style.color = "red";
  }

  // Show result and proceed to the next question or finish the game
  resultContainer.classList.remove("hidden");

  setTimeout(function () {
    resultContainer.classList.add("hidden");

    if (additionalQuestions.length > 1) {
      additionalQuestions.shift(); // Remove the current question from the array
      loadAdditionalQuestions(); // Load another question if more are available
    } else {
      window.location.href = "QuizDone.html"; // Redirect to done.html when all questions are answered
    }
  }, 2000);
}

// Additional Questions
var additionalQuestions = [
  {
    question: "What is the capital of Spain? 1 ",
    correctAnswer: "Paris",
    options: ["Paris", "London", "Berlin", "Madrid"],
  },

  {
    question: "What is the capital of Spain? 2",
    correctAnswer: "London",
    options: ["Paris", "London", "Berlin", "Madrid"],
  },

  {
    question: "What is the capital of Spain? 3",
    correctAnswer: "Berlin",
    options: ["Paris", "London", "Berlin", "Madrid"],
  },

  {
    question: "What is the capital of Spain? 4",
    correctAnswer: "Madrid",
    options: ["Paris", "London", "Berlin", "Madrid"],
  },

  {
    question: "What is the capital of Spain? 5",
    correctAnswer: "Paris",
    options: ["Paris", "London", "Berlin", "Madrid"],
  },

  {
    question: "What is the capital of Spain? 6",
    correctAnswer: "London",
    options: ["Paris", "London", "Berlin", "Madrid"],
  },

  {
    question: "What is the capital of Spain? 7 ",
    correctAnswer: "Berlin",
    options: ["Paris", "London", "Berlin", "Madrid"],
  },

  {
    question: "What is the capital of Spain? 8 ",
    correctAnswer: "Madr",
    options: ["Paris", "London", "Berlin", "Madrid"],
  },

  {
    question: "What is the capital of Spain? 9 ",
    correctAnswer: "eoir",
    options: ["Paris", "London", "Berlin", "Madrid"],
  },

  {
    question: "What is the capital of Spain? 10 ",
    correctAnswer: "Paris",
    options: ["Paris", "London", "Berlin", "Madrid"],
  },


  // Add more questions following the same structure
];

// Function to load additional questions
function loadAdditionalQuestions() {
  var questionBox = document.querySelector(".question-box");
  var optionsContainer = document.querySelector(".options");

  // Select a random question
  var randomQuestionIndex = Math.floor(Math.random() * additionalQuestions.length);
  var currentQuestion = additionalQuestions[randomQuestionIndex];

  // Update HTML with the new question and options
  questionBox.querySelector(".question").textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  // Add options as buttons for the question
  currentQuestion.options.forEach(function (option) {
    var button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.setAttribute("onclick", "checkAnswer(this)");
    optionsContainer.appendChild(button);
  });
}

// Call the function to load additional questions
loadAdditionalQuestions();
document.addEventListener("DOMContentLoaded", function () {
    var countdownElement = document.getElementById("countdown");
    var gameElement = document.getElementById("game");
    var count = 3;
  
    function startCountdown() {
      var countdownInterval = setInterval(function () {
        countdownElement.innerText = count;
        count--;
  
        if (count < 0) {
          clearInterval(countdownInterval); // Clear the interval when count reaches 0
          countdownElement.style.display = "none"; // Hide countdown element
          gameElement.classList.remove("hidden"); // Display game content
        }
      }, 1000);
    }
  
    startCountdown(); // Call the countdown function
  });
  
  function checkAnswer(button) {
    var resultElement = document.getElementById("result");
    var selectedOption = button.innerText;
    var tickCross = document.createElement("div");
    tickCross.classList.add("tick-cross");
    var circle = document.createElement("div");
    circle.classList.add("circle");
  
    if (selectedOption === "Paris") {
      resultElement.innerText = "Correct!";
      tickCross.innerHTML = '<img src="tick.png" alt="tick">';
      tickCross.style.backgroundColor = "rgba(0, 255, 0, 0.8)";
    } else {
      resultElement.innerText = "Wrong! Try again.";
      tickCross.innerHTML = '<img src="cross.png" alt="cross">';
      tickCross.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
    }
  
    gameElement.appendChild(circle);
    circle.appendChild(tickCross);
  
    setTimeout(function () {
      circle.style.display = "none";
    }, 2000);
  }
  
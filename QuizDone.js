// Assuming you'd pass the score as a parameter or retrieve it from localStorage/URL/query parameter
// You can retrieve it and display it using JavaScript

// Get the score from a parameter or storage
const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('score');

// Display the score on the page
const scoreElement = document.getElementById('score');
scoreElement.textContent = score || 'N/A';

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the score from localStorage
    var score = localStorage.getItem('quizScore');
  
    // Check if the score exists and is not null
    if (score !== null) {
      // Update the score element in the HTML with the retrieved score
      var scoreElement = document.getElementById('score');
      scoreElement.innerText = score;
    } else {
      // If the score does not exist, display a default score (0)
      var scoreElement = document.getElementById('score');
      scoreElement.innerText = '0';
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    const scoreElement = document.getElementById('score');
  
    if (scoreElement) {
      scoreElement.textContent = score || '0'; // Set the score text content
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const backgroundElement = document.body;
    let excludeColors = localStorage.getItem('excludeColors');
  
    function toggleBackground() {
      excludeColors = excludeColors === 'true' ? 'false' : 'true';
      localStorage.setItem('excludeColors', excludeColors);
  
      if (excludeColors === 'true') {
        backgroundElement.classList.add('exclude-red-green');
      } else {
        backgroundElement.classList.remove('exclude-red-green');
      }
    }
  
    backgroundElement.addEventListener('click', toggleBackground);
  
    const urlParams = new URLSearchParams(window.location.search);
    const score = urlParams.get('score');
    const scoreElement = document.getElementById('score');
  
    if (scoreElement) {
      scoreElement.textContent = score || '0'; // Set the score text content
    }
  });
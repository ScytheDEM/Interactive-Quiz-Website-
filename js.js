// Function to change language
function changeLanguage(lang) {
  const storedColors = localStorage.getItem('backgroundColors');
  if (lang === 'es') {
    // Spanish language selected
    if (storedColors) {
      const { red, green } = JSON.parse(storedColors);
      // Translate content and apply stored colors for Spanish language
      translateContentToSpanish();
      changeRedAndGreenColors(red, green); // Apply stored colors for Spanish
    } else {
      translateContentToSpanish();
      changeRedAndGreenColors('red', 'green'); // Reset colors to default for Spanish
    }
  } else {
    // Default to English or other languages
    if (storedColors) {
      const { red, green } = JSON.parse(storedColors);
      changeRedAndGreenColors(red, green); // Apply stored colors for default language
    } else {
      changeRedAndGreenColors('red', 'green'); // Reset colors to default for other languages
    }
    // Translate content for other languages if needed
    // translateContentToOtherLanguage();
  }
}

// Function to translate content to Spanish
function translateContentToSpanish() {
  // Change text content, classes, or other elements to Spanish here
  document.getElementById('title').textContent = 'Bienvenido a la Aplicación de Preguntas';
  document.getElementById('start-button').textContent = 'Comenzar';
  document.querySelector('.content h2').textContent = 'Inicio'; // Translate 'Home' title within .content
  // Translate other elements to Spanish as needed
}

// Apply language on page load
document.addEventListener('DOMContentLoaded', function() {
  // Fetch the selected language from local storage
  const selectedLanguage = localStorage.getItem('selectedLanguage');
  if (selectedLanguage) {
    changeLanguage(selectedLanguage);
    // Set the selected language in the dropdown
    document.getElementById('language-select').value = selectedLanguage;
  }
});

// Event listener for language change in dropdown
document.getElementById('language-select').addEventListener('change', function(event) {
  const selectedLanguage = event.target.value;
  localStorage.setItem('selectedLanguage', selectedLanguage);
  changeLanguage(selectedLanguage);
});

// New code for changing content based on language selection
function changeLanguage(lang) {
  if (lang === 'es') {
    document.getElementById('title-en').style.display = 'none';
    document.getElementById('title-es').style.display = 'block';

    document.getElementById('start-button-en').style.display = 'none';
    document.getElementById('start-button-es').style.display = 'block';

    document.getElementById('high-scores-button-en').style.display = 'none';
    document.getElementById('high-scores-button-es').style.display = 'block';

    document.querySelector('.content h2').textContent = 'Inicio'; // Translate 'Home' title to Spanish
  } else {
    document.getElementById('title-en').style.display = 'block';
    document.getElementById('title-es').style.display = 'none';

    document.getElementById('start-button-en').style.display = 'block';
    document.getElementById('start-button-es').style.display = 'none';

    document.getElementById('high-scores-button-en').style.display = 'block';
    document.getElementById('high-scores-button-es').style.display = 'none';

    document.querySelector('.content h2').textContent = 'Home'; // Translate 'Home' title to English
  }
}

// Apply language change on page load if selected
document.addEventListener('DOMContentLoaded', function() {
  const selectedLanguage = localStorage.getItem('selectedLanguage');
  if (selectedLanguage) {
    changeLanguage(selectedLanguage);
    document.getElementById('language-select').value = selectedLanguage;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const selectedLanguage = localStorage.getItem('selectedLanguage');
  const languageSelect = document.getElementById('language-select');

  if (selectedLanguage) {
    languageSelect.value = selectedLanguage;
    changeLanguage(selectedLanguage);
  }

  languageSelect.addEventListener('change', function(event) {
    const selectedLanguage = event.target.value;
    localStorage.setItem('selectedLanguage', selectedLanguage);
    changeLanguage(selectedLanguage);
  });
});

// Event listener for language change
document.getElementById('language-select').addEventListener('change', function(event) {
  const selectedLanguage = event.target.value;
  localStorage.setItem('selectedLanguage', selectedLanguage);
  changeLanguage(selectedLanguage);
});

// Get the particle container element
const particleContainer = document.getElementById("particle-container");
const background = document.getElementById("background");

// Function to toggle particle effects
function toggleParticleEffects() {
  particleContainer.classList.toggle("hide-particles");
}

// Event listener for clicking the background
background.addEventListener("click", function(event) {
  toggleParticleEffects();
});

// Get the high scores button by its ID
const highScoresButton = document.getElementById('high-scores-button-en');

// Hide the high scores button
highScoresButton.style.display = 'none';
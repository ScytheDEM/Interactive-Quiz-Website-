
var checkbox = document.getElementById('box4');

// Add an event listener to the checkbox
checkbox.addEventListener('change', function() {
  // Store the state of the checkbox in localStorage
  localStorage.setItem('toggleState', checkbox.checked);
});

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the toggle state from localStorage
    var storedToggleState = localStorage.getItem('toggleState');
    var checkbox = document.getElementById('box4');
  
    // If a stored state exists, update the checkbox accordingly
    if (storedToggleState !== null) {
      checkbox.checked = storedToggleState === 'true';
    }
  
    // Add an event listener to the checkbox to store its state on change
    checkbox.addEventListener('change', function() {
      localStorage.setItem('toggleState', checkbox.checked);
    });
  
    // Apply your color changes based on the toggle state here
  });

// Get the checkbox elements from the settings page
const toggle1 = document.getElementById('toggle1');
const toggle2 = document.getElementById('toggle2');
const toggle3 = document.getElementById('toggle3');
const toggle4 = document.getElementById('toggle4');

// Function to handle changes in checkbox state
function handleCheckboxChange() {
  localStorage.setItem('toggle1', toggle1.checked);
  localStorage.setItem('toggle2', toggle2.checked);
  localStorage.setItem('toggle3', toggle3.checked);
  localStorage.setItem('toggle4', toggle4.checked);

  // Apply color change when Box 4 is checked
  handleColorChange();
  // Broadcast the color change event
  broadcastColorChangeEvent();
}

// Function to apply color changes based on checkbox state
function handleColorChange() {
  const box4Checked = localStorage.getItem('toggle4') === 'true';

  if (box4Checked) {
    localStorage.setItem('colorChanged', 'true');
  } else {
    localStorage.removeItem('colorChanged');
  }
}

// Function to broadcast color change event
function broadcastColorChangeEvent() {
  const colorChanged = localStorage.getItem('colorChanged') === 'true';
  if (colorChanged) {
    localStorage.setItem('backgroundColors', JSON.stringify({ red: '#FFA500', green: '#FFFF00' }));
  } else {
    localStorage.removeItem('backgroundColors');
  }
}

// Event listener for checkbox change
toggle1.addEventListener('change', handleCheckboxChange);
toggle2.addEventListener('change', handleCheckboxChange);
toggle3.addEventListener('change', handleCheckboxChange);
toggle4.addEventListener('change', handleCheckboxChange);

// Apply color changes on page load
document.addEventListener('DOMContentLoaded', handleColorChange);

function toggleExclusion() {
    var excludeColors = document.getElementById('box4').checked;
    localStorage.setItem('excludeColors', excludeColors);
  }
// sidebar
$(document).ready(function(){
  $('sub-body').on('click', function(event){
    $(this).siblings().removeClass('activeMymusic');
    $(this).addClass('activeMusic');
    event.preventDefault();
  });
});


// popup
const dotIcons = document.querySelectorAll('#dot');
const popups = document.querySelectorAll('.popup');

dotIcons.forEach(function(dotIcon, i) {
  let timeout;

  dotIcon.addEventListener('mouseover', function() {
    clearTimeout(timeout); // Clear any existing timeout
    timeout = setTimeout(function() {
      popups[i].style.display = 'flex';
    }, 1500); // Set a delay of 1.5 seconds (1500 milliseconds)
  });

  dotIcon.addEventListener('mouseout', function() {
    clearTimeout(timeout); // Clear the timeout when mouse moves out
    popups[i].style.display = 'none';

  });
});

// option box
// const optionBox = document.querySelector('.option-box');

// const dot = document.getElementById('dot')

// let isOptionBoxVisible = false;

// dot.addEventListener('click', function() {
//   if (isOptionBoxVisible) {
//     optionBox.style.display = 'none';
//   } else {
//     optionBox.style.display = 'flex';
//   }
//   isOptionBoxVisible = !isOptionBoxVisible;
// });

const dotIcon = document.querySelectorAll('.dot-vertical');
const optionBoxes = document.querySelectorAll('.option-box');

// Loop through each dot icon and add a click event listener
dotIcon.forEach((dotIcon, index) => {
  dotIcon.addEventListener('click', function() {
    const optionBox = optionBoxes[index];
    
    // Hide all other option boxes
    optionBoxes.forEach((box, i) => {
      if (i !== index) {
        box.classList.remove('active');
      }
    });
    optionBox.classList.toggle('active');
  });
});



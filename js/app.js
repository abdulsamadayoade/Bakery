// MENU TOGGLE
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('show');
});

// CLOSE THE NAV WHEN NAVLNKS ARE CLICKED
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
        body.classList.remove('show');
    })
})

// SCROLL REVEAL
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});
// JavaScript for Success Message
document.getElementById('newsletterForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
   
    setTimeout(() => {
      
      document.getElementById('newsletterForm').reset();
  
     
      const successMessage = document.getElementById('successMessage');
      successMessage.style.display = 'block';
  
      
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000);
    }, 500); 
  });
  
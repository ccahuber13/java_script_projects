// Responsive navigation Menu Code

// Function to select elements on the fly
const selectElement = (element) => document.querySelector(element);

selectElement('.nav-mobile-menu').addEventListener('click', () => {
  selectElement('nav').classList.toggle('active');
});
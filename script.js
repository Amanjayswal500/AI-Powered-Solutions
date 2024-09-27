// Add this code to your JavaScript file
const menuToggle = document.getElementById('menu-toggle');
const header = document.querySelector('.header');
const cards = document.querySelector('.cards');

menuToggle.addEventListener('change', () => {
  header.classList.toggle('open');
  cards.classList.toggle('open');
});
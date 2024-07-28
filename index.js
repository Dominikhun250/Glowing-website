const loader = document.querySelector('.loader');
const playersSpan = document.querySelector('#players');

window.addEventListener('load', () => {
  loader.classList.add('loader--hidden');
  setTimeout(() => {
    document.body.removeChild(loader);
  }, 1500)
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
const fallingTexts = document.querySelectorAll('.falling-text');
fallingTexts.forEach(text => {
  text.classList.add('show');
});
}, 1000)
});

document.addEventListener('contextmenu', event => event.preventDefault());
console.log('index.js loaded');

window.onload = () => {
  document.querySelector('#button').addEventListener('click', () => {
    console.log('Button Clicked');
  });
};

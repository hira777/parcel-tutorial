console.log('index.js loaded');

window.onload = () => {
  document.querySelector('#button').addEventListener('click', () => {
    console.log('Button Clicked');

    import('./modules/render').then(page => {
      page.render(document.querySelector('.result'));
    });
  });
};

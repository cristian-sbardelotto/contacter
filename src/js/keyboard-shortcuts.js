const submitButton = document.querySelector('button[type="submit"]');

window.addEventListener('keydown', event => {
  const form = document.querySelector('form');

  if (event.key === 'Enter' && form) submitButton.click();
});

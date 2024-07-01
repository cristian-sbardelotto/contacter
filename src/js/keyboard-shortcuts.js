const submitButton = document.querySelector('button[type="submit"]');

window.addEventListener('keydown', event => {
  if (event.key === 'Enter') submitButton.click();
});

const popover = document.querySelector('div[popover]');

export function closeModal() {
  document.activeElement.blur();
  popover.togglePopover(false);
}

export function sendSubmitError(message) {
  // TODO: remove "Error:" initial word from message
  document.querySelector('.submit-error').innerHTML = message;
}

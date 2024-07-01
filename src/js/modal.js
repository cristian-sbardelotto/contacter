const popover = document.querySelector('div[popover]');

export function closeModal() {
  document.activeElement.blur();
  popover.togglePopover(false);
}

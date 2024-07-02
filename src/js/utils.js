export function addContactDeleteListeners(fn) {
  const profilePictures = document.querySelectorAll('.profile-picture');

  profilePictures.forEach(item =>
    item.addEventListener('click', event => fn(event))
  );
}

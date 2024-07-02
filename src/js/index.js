import { Agenda } from './agenda.js';
import { closeModal } from './modal.js';
import { addContactDeleteListeners } from './utils.js';
import './keyboard-shortcuts.js';

const agenda = new Agenda();

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  if (true) {
    // TODO: success
    agenda.addContact(data);
    console.log(agenda);
    form.reset();
    closeModal();
  }
}

export function handleDeleteContact(event) {
  const contactInfoDiv = event.target.nextElementSibling;
  const name = contactInfoDiv.querySelector('h4').textContent;

  const contact = agenda.getContactByName(name);
  agenda.removeContact(contact.id);
  console.log(agenda);
}

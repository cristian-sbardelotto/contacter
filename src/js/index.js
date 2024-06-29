import { Agenda } from './agenda.js';

const agenda = new Agenda();

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  agenda.addContact(data);
  console.log(agenda);
}

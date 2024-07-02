import { handleDeleteContact } from './index.js';
import { addContactDeleteListeners } from './utils.js';

export class Agenda {
  /**
   * @param {Array} [initialValue] - Initial value of the agenda.
   */
  constructor(initialValue) {
    this.contacts = initialValue ?? [];
  }

  addContact({ name, phone }) {
    // TODO: validation on name and phone
    // TODO: name can't be repeated
    const id = self.crypto.randomUUID();

    this.contacts.push({ name, phone, id });

    this.updateDOM();
  }

  removeContact(id) {
    // TODO: check if ID exists
    const newList = this.contacts.filter(contact => contact.id !== id);

    this.contacts = newList;

    this.updateDOM();
  }

  getContactByName(name) {
    const contact = this.contacts.find(item => item.name === name);

    if (contact.length <= 0) return; // TODO: throw error

    return contact;
  }

  updateDOM() {
    const list = document.querySelector('ul.list');
    list.innerHTML = '';

    this.contacts.forEach(contact => {
      list.innerHTML += `
        <li class="item">
          <div class="profile-picture" title="Delete contact">
            <span>${contact.name[0]}</span>

            <i class="ph ph-trash-simple"></i>
          </div>

          <div class="contact-info">
            <h4>${contact.name}</h4>

            <p>${contact.phone}</p>
          </div>
        </li> 
      `;
    });

    addContactDeleteListeners(handleDeleteContact);
  }
}

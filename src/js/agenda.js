export class Agenda {
  /**
   * @param {Array} [initialValue] - Initial value of the agenda.
   */
  constructor(initialValue) {
    this.contacts = initialValue ?? [];
  }

  addContact({ name, phone }) {
    // TODO: validation on name and phone
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

  updateDOM() {
    const list = document.querySelector('ul.list');
    list.innerHTML = '';

    this.contacts.forEach(contact => {
      list.innerHTML += `
        <li class="item">
          <div class="profile-picture">${contact.name[0]}</div>

          <div class="contact-info">
            <h4>${contact.name}</h4>

            <p>${contact.phone}</p>
          </div>
        </li> 
      `;
    });
  }
}

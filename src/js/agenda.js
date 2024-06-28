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
  }

  removeContact(id) {
    // TODO: check if ID exists
    const newList = this.contacts.filter(contact => contact.id !== id);

    this.contacts = newList;
  }
}

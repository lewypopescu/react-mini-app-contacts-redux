import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import styles from './App.module.css';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  function handleAddContact(newContact) {
    const contactExist = contacts.some(
      eC => eC.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );

    if (contactExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    const contactToAdd = {
      id: nanoid(),
      ...newContact,
    };

    setContacts([...contacts, contactToAdd]);
  }

  function handleChangeFilter(event) {
    setFilter(event.target.value);
  }

  function getFilteredContacts() {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  }

  function handleDeleteContact(contactId) {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  const filteredContacts = getFilteredContacts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2 className={styles.subtitle}>Contacts</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

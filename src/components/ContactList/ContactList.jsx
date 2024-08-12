import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';
export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.contactItem}>
          {contact.name}: {contact.number}
          <button
            onClick={() => onDeleteContact(contact.id)}
            className={styles.deleteButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

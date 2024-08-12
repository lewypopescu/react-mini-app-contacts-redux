import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import styles from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?"
          title="Name may contain only letters, apostrophe, dash and spaces"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="number">
        Number
        <input
          id="number"
          type="tel"
          name="number"
          pattern="^\+?[0-9\s\-\(\)]+$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

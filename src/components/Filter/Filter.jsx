import React from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.css';
export default function Filter({ value, onChange }) {
  return (
    <div className={styles.filter}>
      <label htmlFor="filter">
        Find contacts by name
        <input id="filter" type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

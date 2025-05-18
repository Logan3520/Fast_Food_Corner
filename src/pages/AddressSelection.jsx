import React, { useState } from 'react';
import styles from './AddressSelection.module.css';

function AddressSelection() {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Address submitted:', { state, city, street });
  };

  return (
    <div className={styles['address-selection-container']}>
      <h2>Select Your Address</h2>
      <form className={styles['address-form-container']} onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="state" className={styles['form-label']}>
            State:
          </label>
          <input
            type="text"
            id="state"
            className={styles['form-input']}
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="city" className={styles['form-label']}>
            City:
          </label>
          <input
            type="text"
            id="city"
            className={styles['form-input']}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="street" className={styles['form-label']}>Street:</label>
          <input type="text" id="street" className={styles['form-input']} value={street} onChange={(e) => setStreet(e.target.value)} required />
        </div>

        <button className={styles['submit-button']} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddressSelection;
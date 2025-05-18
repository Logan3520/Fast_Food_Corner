import React, { useState } from 'react';
import styles from './AddressSelection.module.css';

function AddressSelection() {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Address submitted:', { state, city, street, zipCode });
  };

  return (
    <div className={styles['address-selection-container']}>
      <div className={styles['card']}>
        <h2 className={styles['title']}>Enter Your Address</h2>
        <form className={styles['form']} onSubmit={handleSubmit}>
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
            <label htmlFor="street" className={styles['form-label']}>
              Street:
            </label>
            <input
              type="text"
              id="street"
              className={styles['form-input']}
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="zipCode" className={styles['form-label']}>
              Zip Code:
            </label>
            <input
              type="text"
              id="zipCode"
              className={styles['form-input']}
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </div>
          <button className={styles['submit-button']} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddressSelection;
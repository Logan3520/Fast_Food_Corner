import React from 'react';
import styles from './FoodItem.module.css';

const FoodItem = ({ name, description }) => {
  return (
    <div className={styles.foodItem}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <button className={styles.addToCart}>Add to Cart</button>
    </div>
  );
};

export default FoodItem;

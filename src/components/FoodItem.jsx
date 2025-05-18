import React, { useContext } from "react";
import styles from './FoodItem.module.css';
import { CartContext } from '../App';

const FoodItem = ({ id, name, description }) => {
  const {addToCart} = useContext(CartContext);

  const handleAddToCart = ()=>{
        addToCart({id:id,name:name,description:description});
  };

  return (
    <div className={styles.foodItem}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <button className={styles.addToCart} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default FoodItem;

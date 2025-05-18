import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../App';
import styles from './Cart.module.css'

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClearCart = () => {
    clearCart();
  };
 
  const handlePlaceOrder = () => {
    navigate('/address');
  };

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartHeader}>Your Cart</h2>
      {cart.length === 0 ? (
        <p className={styles.emptyCartMessage}>Your cart is empty.</p>
      ) : (
        <ul className={styles.cartList}>
          {cart.map((item, index) => (
            <li key={index} className={styles.cartItem}>
              <div className={styles.itemDetails}>
                <p className={styles.itemName}>
                  Name: {item.name}
                </p>
                <p className={styles.itemDescription}>
                  Description: {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button className={styles.clearCartButton} onClick={handleClearCart}>
          Clear Cart
        </button>
      )}
      {cart.length > 0 && (
        <button className={styles.placeOrderButton} onClick={handlePlaceOrder}>
          Place Order
        </button>
      )}
    </div>
  );
};

export default Cart;

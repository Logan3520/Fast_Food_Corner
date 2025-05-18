import React, { useState, useEffect, useContext } from 'react';
import FoodItem from '../components/FoodItem';
import { useParams } from 'react-router-dom';
import { getFoodsByRestaurantId } from '../api/api';
import styles from './FoodSelection.module.css';
import { CartContext } from '../App';



const FoodSelection = () => {
  const { restaurantId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadFoods = async () => {
      try {
        const data = await getFoodsByRestaurantId(restaurantId);
        setFoods(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadFoods();
  }, [restaurantId]);

// useEffect(()=>{
//   console.log("foods selected",foods.description);
  
//   if(foods.description !== undefined){
//     addToCart(foods);
//   }
// },[foods]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Food Menu</h2>
      <div className={styles.foodList}>
        {foods.map((food) => (
          <FoodItem key={food.id} id = {food.id} name={food.name} description={food.description} />
        ))}
      </div>
    </div>
  );
};

export default FoodSelection;
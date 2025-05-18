import React, { useState, useEffect, useContext } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import { getRestaurants } from '../api/api';
import styles from './RestaurantSelection.module.css';

const RestaurantSelection = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const restaurantsData = await getRestaurants();
        setRestaurants(restaurantsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Select a Restaurant</h1>
      <div className={styles.restaurantList}>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            id={restaurant.id}
            image={restaurant.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantSelection;
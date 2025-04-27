import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ScrollableTab.module.css';

const ScrollableTab = ({ restaurants }) => {
  return (
    <div className={styles.scrollableTab}>
      <div className={styles.navContent}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className={styles.navItem}>
            <Link to={`/restaurant/${restaurant.id}`} className={styles.navLink}>
              {restaurant.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableTab;

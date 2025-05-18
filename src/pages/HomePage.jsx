

import React from 'react'
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/restaurant');
  };

  return (
    <div className="home-page">
      <h1>Welcome to Our Food Delivery App</h1>
      <p>Get delicious food delivered right to your doorstep. Browse our wide selection of restaurants and start your order now!</p>
      <button onClick={handleOrderClick}>Place an Order</button>
    </div>
  );
}

export default HomePage;
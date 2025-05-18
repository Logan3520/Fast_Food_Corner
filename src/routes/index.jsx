import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import FoodSelection from '../pages/FoodSelection';
import AddressSelection from '../pages/AddressSelection';
import Cart from '../pages/Cart';
import RestaurantSelection from '../pages/RestaurantSelection';




const AppRoutes = () => {
  return (
    <Routes>      
        <Route path="/" element={<HomePage />} />
      <Route path="/restaurant" element={<RestaurantSelection />}  />
      <Route path="/food/:restaurantId" element={<FoodSelection />} />
      <Route path="/address" element={<AddressSelection />} />
      <Route path = "/cart" element ={<Cart/>}/>
    </Routes>
  );
};
export { AppRoutes, RestaurantSelection, FoodSelection, AddressSelection, HomePage,Cart };
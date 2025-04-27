import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RestaurantSelection from '../pages/RestaurantSelection';
import FoodSelection from '../pages/FoodSelection';
import AddressSelection from '../pages/AddressSelection';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/restaurant" element={<RestaurantSelection />} />
      <Route path="/food/:restaurantId" element={<FoodSelection />} />
      <Route path="/address" element={<AddressSelection />} />
    </Routes>
  );
};
export {AppRoutes};
export { RestaurantSelection, FoodSelection, AddressSelection };
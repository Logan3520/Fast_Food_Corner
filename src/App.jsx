import React, { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { AppRoutes } from "./routes/index";

export const CartContext = createContext(null);
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </CartContext.Provider>
  );
}
export default App;

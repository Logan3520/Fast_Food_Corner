import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../App";

function Header() {
  const { cart } = useContext(CartContext); // Access the cart from context

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "10px",
        backgroundColor: "#f0f0f0",
        alignItems: "center",
        position: "sticky",
        top: "0",
        zIndex: "100",
      }}
    >
      <Link
        to="/cart"
        style={{
          position: "relative",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <FaShoppingCart size={30} />
        {cart.length > 0 && ( // Show the counter only if there are items in the cart
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-10px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "50%",
              padding: "5px 8px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {cart.length}
          </span>
        )}
      </Link>
    </header>
  );
}

export default Header;

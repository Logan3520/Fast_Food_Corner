
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '10px',
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      position: 'sticky',
      top: '0',
      zIndex: '100',
    }}>
      <Link to="/cart">
        <FaShoppingCart size={30} />
      </Link>
    </header>
  );
}

export default Header;
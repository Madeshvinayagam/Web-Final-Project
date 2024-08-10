import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category">Categories</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

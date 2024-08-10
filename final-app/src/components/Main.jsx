import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Assuming you have a similar CSS file for styling

const HomePage = () => {
  return (
    <div>
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

      <main>
        <h1 className="text-head">The Chennai Mobiles</h1>
      </main>

      <section>
        {/* Additional content can be added here */}
      </section>

      <footer>
        <p>&copy; 2024 The Chennai Mobiles PVT LTD. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

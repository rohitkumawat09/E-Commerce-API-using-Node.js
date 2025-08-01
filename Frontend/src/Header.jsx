import React from 'react';
import { Link } from 'react-router-dom';
import cart from './cart';


export const Header = () => {
  return (
    <header className="header">
      <div className="logo"> <Link to="/Home">My E-Commerce </Link> </div>
      <nav className="nav-links">
        <Link to="/Home">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">Cart{cart.length}</Link>
          
          
       
      </nav>
    </header>
  );
};

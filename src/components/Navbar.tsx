import React from 'react';
import logo from '../logo.svg';
import './Navbar.css';

function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
      <header className="app-logo">
        <img src={logo} className="app-logo-icon" alt="logo" />
        <h2 className="app-logo-title">Furniro</h2>
      </header>

      <ul className="nav-menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <ul className="shopping-menu">
        <li>
          <a href="#">account</a>
        </li>
        <li>
          <a href="#">search</a>
        </li>
        <li>
          <a href="#">heart</a>
        </li>
        <li>
          <a href="#">shopping-cart</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import { RiHeartLine, RiSearchLine, RiShoppingCart2Line, RiUserLine } from 'react-icons/ri';
import logo from '../logo.svg';
import './Navbar.css';

export default function Navbar(): JSX.Element {
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
          <a href="#">
            <RiUserLine />
          </a>
        </li>
        <li>
          <a href="#">
            <RiSearchLine />
          </a>
        </li>
        <li>
          <a href="#">
            <RiHeartLine />
          </a>
        </li>
        <li>
          <a href="#">
            <RiShoppingCart2Line />
          </a>
        </li>
      </ul>
    </nav>
  );
}

import React from 'react';
import {
  RiHeartLine,
  RiSearchLine,
  RiShoppingCart2Line,
  RiUserLine,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ImageWithFallback from './ImageWithFallback';
import placeholder from './placeholder.jpg';

export default function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
      <header className="app-logo">
        <Link to="/">
          <ImageWithFallback
            src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vh5Y-Fi34xxpZSBcHifz25LyF2HijVHrdCQm4uOmGAcfmvxrlVwwhUgm9KIXKsXCfWWMprzhQco~5XUZIRtE8IXyXbTSSYRoUQGTfMmVT~W1tZsMx2doKHEb7XL21EdiBq524XvtzXRYjfrQ-gpyov3D498VFzX4L-OZncbEjuL3LO19VvY1CXkJ2WZuu4eLROXp~mKmCX0to0qaqSUIVonLmFEE3SN1Yi4gWZMsy8-LrW-o4233W5W0haSXJkUGTQrW13GNJStmxujHvZ~Ngo4bMokeAKONJoqzO-JaLgqdS6WCLPldhLt7c6DcosDDVpsAcFfQe2Zd8IOlZ6Runw__"
            className="app-logo-icon"
            alt="furniro logotype"
            fallback={placeholder}
          />
        </Link>
        <h2 className="app-logo-title">
          <Link to="/">Furniro</Link>
        </h2>
      </header>

      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <ul className="shopping-menu">
        <li>
          <Link to="/account">
            <RiUserLine className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/search">
            <RiSearchLine className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <RiHeartLine className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <RiShoppingCart2Line className="icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

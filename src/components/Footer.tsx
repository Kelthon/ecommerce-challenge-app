import React from 'react';
import './Footer.css';

export default function Footer(): JSX.Element {
  return (
    <footer id="footer">
      <div className="container">
        <section id="about">
          <h2>Funiro.</h2>
          <address>
            <p>400 University Drive Suite 200</p>
            <p>Coral Gables,</p>
            <p>FL 33134 USA</p>
          </address>
        </section>

        <section id="links">
          <h3>Links</h3>
          <ul>
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
        </section>

        <section id="help">
          <h3>Help</h3>
          <ul>
            <li>
              <a href="#">Payment Options</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Privacy Policies</a>
            </li>
          </ul>
        </section>

        <section id="newsletter">
          <h3>Newsletter</h3>
          <p>
            <input type="email" placeholder="Enter Your Email Address" />
            <button type="submit">Subscribe</button>
          </p>
        </section>
      </div>

      <hr />
      <p>2023 funiro. All rights reserved</p>
    </footer>
  );
}

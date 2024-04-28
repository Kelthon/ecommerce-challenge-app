import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer(): JSX.Element {

  const [email, setMail] = useState<string>("");

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
        </section>

        <section id="help">
          <h3>Help</h3>
          <ul>
            <li>
              <Link to="/cart">Payment Options</Link>
            </li>
            <li>
              <Link to="/contact">Returns</Link>
            </li>
            <li>
              <Link to="/contact">Privacy Policies</Link>
            </li>
          </ul>
        </section>

        <section id="newsletter">
          <h3>Newsletter</h3>
          <p>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(event) => setMail(event.target.value)}
            />
            <button type="submit" onClick={event => setMail("")}>Subscribe</button>
          </p>
        </section>
      </div>

      <hr />
      <p>2023 funiro. All rights reserved</p>
    </footer>
  );
}

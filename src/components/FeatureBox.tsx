import React from 'react';
import './FeatureBox.css';
import { RiCustomerServiceLine, RiMailSendLine, RiTrophyLine, RiVerifiedBadgeLine } from 'react-icons/ri';


export default function FeatureBox(): JSX.Element {
  return (
    <div id="feature-box">
      <ul>
        <li>
          <RiTrophyLine className="icon" />
          <section>
            <h2>High Quality</h2>
            <p>crafted from top materials</p>
          </section>
        </li>
        <li>
          <RiVerifiedBadgeLine className="icon" />
          <section>
            <h2>Warranty Protection</h2>
            <p>Over 2 Years</p>
          </section>
        </li>
        <li>
          <RiMailSendLine className="icon" />
          <section>
            <h2>Free Shipping</h2>
            <p>Order over 150 &#36;</p>
          </section>
        </li>
        <li>
          <RiCustomerServiceLine className="icon" />
          <section>
            <h2>24 / 7 Support</h2>
            <p>Dedicated support</p>
          </section>
        </li>
      </ul>
    </div>
  );
}

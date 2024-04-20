import React from 'react';
import './ProductItem.css';
import placeholder from './placeholder.jpg';

type Product = {
  name: string;
  description: string;
  isNew: boolean;
  image_path: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
};

function ProductItem(): JSX.Element {
  return (
    <section className="product-item">
      <h3 className="name">Placeholder Product</h3>
      <p className="product-image">
        <img src={placeholder} alt="A furniture product" />
        <ul className="tags">
          <li className="released">
            <span>New</span>
          </li>
          <li className="discount-percent">
            <span>-30%</span>
          </li>
        </ul>
      </p>
      <p className="description">A furniture product</p>
      <p className="product-price">
        <b className="price">$ 500,00</b>
        <small className="discount-price">$ 1500,00</small>
      </p>
    </section>
  );
}

export default ProductItem;

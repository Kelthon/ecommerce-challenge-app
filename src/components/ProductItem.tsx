import React from 'react';
import './ProductItem.css';

interface ProductItemProps {
  name: string;
  description: string;
  isNew: boolean;
  image_path: string;
  price: number;
  discountPrice?: number;
  discountPercent?: number;
}

export default function ProductItem({
  name,
  description,
  isNew,
  image_path,
  price,
  discountPrice,
  discountPercent
}: ProductItemProps): JSX.Element {
  return (
    <section className="product-item">
      <h3 className="name">{name}</h3>
      <p className="product-image">
        <img src={image_path} alt="A furniture product" />
        <ul className="tags">
          {isNew && (
            <li className="released">
              <span>New</span>
            </li>
          )}
          <li className="discount-percent">
            <span>-{discountPercent}%</span>
          </li>
        </ul>
      </p>
      <p className="description">{description}</p>
      <p className="product-price">
        <b className="price">
          $ {discountPrice ? discountPrice : price}
        </b>
        {discountPrice && (
          <small className="discount-price">$ {price}</small>
        )}
      </p>
    </section>
  );
}

import React from 'react';
import './ProductItem.css';
import placeholder from './placeholder.jpg';
import { RiArrowLeftRightLine, RiHeartLine, RiShareLine } from 'react-icons/ri';

interface ProductTagsProps {
  isNew: boolean;
  discountPercent?: number;
}

export interface ProductItemProps extends ProductTagsProps {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  discountPrice?: number;
}

function ProductTags({
  isNew,
  discountPercent,
}: ProductTagsProps): JSX.Element {
  return (
    <>
      {(isNew || discountPercent) && (
        <ul className="product-tags">
          {isNew && (
            <li className="new-product">
              <span>New</span>
            </li>
          )}
          {discountPercent && (
            <li className="discount-percent">
              <span>&minus;{discountPercent}&#37;</span>
            </li>
          )}
        </ul>
      )}
    </>
  );
}

export default function ProductItem({
  id,
  name,
  description,
  isNew,
  imagePath,
  price,
  discountPrice,
  discountPercent,
}: ProductItemProps): JSX.Element {
  return (
    <div className="product-item">
      <div className="container">
        <header className="product-cover">
          <img className="product-image" src={placeholder} alt={description} />
          <ProductTags isNew={isNew} discountPercent={discountPercent} />
        </header>
        <article className="product-info">
          <h3 className="product-name">{name}</h3>
          <p className="product-description">{description}</p>
        </article>
        <footer className="product-price">
          <p className="price">&#36; {discountPrice ? discountPrice : price}</p>

          {discountPrice && (
            <p className="product-comparison-price">
              <small className="discount-price">&#36; {price}</small>
            </p>
          )}
        </footer>
      </div>

      <div className="overlay">
        <a href="#">See Details</a>

        <ul className="product-quick-links">
          <li className="quick-link">
            <a href="#">
              <RiShareLine />
              <span>Share</span>
            </a>
          </li>
          <li className="quick-link">
            <a href="#">
              <RiArrowLeftRightLine />
              <span>Compare</span>
            </a>
          </li>
          <li className="quick-link">
            <a href="#">
              <RiHeartLine />
              <span>Like</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

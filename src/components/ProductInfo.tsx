import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiStarFill,
  RiStarHalfLine,
  RiTwitterFill,
} from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { ProductItemProps } from './ProductItem';
import './ProductInfo.css';
import placeholder from './placeholder.jpg';

export default function ProductInfo(): JSX.Element {
  const [product, setProduct] = useState<ProductItemProps | null>(null);
  const { productId } = useParams();
  const [amount, setAmount] = useState<number>(1);
  const [image, setImage] = useState<string>(placeholder)

  const inputAmountHandle = (amount: number) => {
    setAmount(amount > 0 ? amount : 0);
  };

  const fixAmount = () => {
    setAmount(amount > 0 ? amount : 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (product === null) {
        await axios
          .get<ProductItemProps>(`http://localhost:3000/product/${productId}`)
          .then((response) => {
            console.log(`http://localhost:3000/product/${productId}`);
            setProduct(response.data);
          });
      }
    };
    fetchData();
  }, [product, productId]);

  return (
    <div id="product">
      <section className="product-info">
        <h2>{product?.name}</h2>
        <p className="product-price">
          <span className="price">
            {product &&
              (product.discountPrice ? product.discountPrice : product.price)}
          </span>
          <small className="total-price">{product?.price}</small>
        </p>
        <div className="user-reviews">
          <ul>
            <li key="star0">
              <RiStarFill />
            </li>
            <li key="star1">
              <RiStarFill />
            </li>
            <li key="star2">
              <RiStarFill />
            </li>
            <li key="star3">
              <RiStarFill />
            </li>
            <li key="star4">
              <RiStarHalfLine />
            </li>
          </ul>
          <small>5 Customer Reviews</small>
        </div>
        <p className="product-description">{product?.description}</p>
        <div className="controls">
          <p className="amount-control">
            <button
              type="button"
              onClick={(e) => inputAmountHandle(amount - 1)}
              onBlur={(e) => fixAmount()}
            >
              &#8722;
            </button>
            <input
              type="text"
              value={amount}
              onChange={(e) => inputAmountHandle(+e.target.value)}
              onBlur={(e) => fixAmount()}
            />
            <button
              type="button"
              onClick={(e) => inputAmountHandle(amount + 1)}
              onBlur={(e) => fixAmount()}
            >
              &#43;
            </button>
          </p>
          <p className="button-control">
            <button>Add To Cart</button>
          </p>
          <p className="button-control">
            <button>&#43; Compare</button>
          </p>
        </div>
        <hr />
        <div className="container">
          <div className="col">
            <div className="row">SKU</div>
            <div className="row">Category</div>
            <div className="row">Tags</div>
            <div className="row">Share</div>
          </div>
          <div className="col">
            <div className="row">:</div>
            <div className="row">:</div>
            <div className="row">:</div>
            <div className="row">:</div>
          </div>

          <div className="col">
            <div className="row">{product?.sku}</div>
            <div className="row">{product?.categoryName}</div>
            <div className="row"></div>
            <div className="row">
              <ul id="social-medias">
                <li>
                  <RiFacebookBoxFill />
                </li>
                <li>
                  <RiLinkedinBoxFill />
                </li>
                <li>
                  <RiTwitterFill />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <aside className="product-image">
        <img src={image} alt={product?.description} />
        <ul className="grid-image">
          {product?.otherImagesLink?.split(' ').map((link, index) => {
            return (
              <li key={index}>
                <button type="button" onClick={(e) => setImage(link)}>
                  <img src={link} alt={product?.description} />
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}

import axios from 'axios';
import './SelectedProducts.css';
import React, { useEffect, useState } from 'react';
import ProductItem, { ProductItemProps as Product } from './ProductItem';
import { Link } from 'react-router-dom';

interface SelectedProductsProps {
  limit?: number;
  title: string;
}

function getListItemFromProducts(product: Product): JSX.Element {
  return (
    <li key={product.id}>
      <ProductItem
        id={product.id}
        name={product.name}
        description={product.description}
        isNew={product.isNew}
        image_link={product.image_link}
        price={product.price}
        discount_price={product.discount_price}
        discount_percent={product.discount_percent}
      />
    </li>
  );
}

export default function SelectedProducts({
  title,
  limit,
}: SelectedProductsProps): JSX.Element {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    if (products === null) {
      const fetchProducts = async () => {
        await axios
          .get<{
            page: Product[];
            index: number;
            count: number;
          }>(
            limit
              ? `http://localhost:3000/product/all&limit=${limit}`
              : `http://localhost:3000/product/all`,
          )
          .then((response) => setProducts(response.data.page));
      };

      fetchProducts();
    }
  }, [limit, products]);

  const productsList = products?.map((product) =>
    getListItemFromProducts(product),
  );

  return (
    <section id="selected-products">
      <h2 className="section-title">{title}</h2>
      <ul className="products">{productsList}</ul>
      <p>
        <Link to="/shop">See more</Link>
      </p>
    </section>
  );
}

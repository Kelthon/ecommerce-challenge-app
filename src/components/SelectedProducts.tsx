import axios from 'axios';
import './SelectedProducts.css';
import React, { useEffect, useState } from 'react';
import ProductItem, { ProductItemProps as Product } from './ProductItem';
import { Link } from 'react-router-dom';

function getListItemFromProducts(product: Product): JSX.Element {
  return (
    <li key={product.id}>
      <ProductItem
        id={product.id}
        name={product.name}
        description={product.description}
        isNew={product.isNew}
        imagePath={product.imagePath}
        price={product.price}
        discountPrice={product.discountPrice}
        discountPercent={product.discountPercent}
      />
    </li>
  );
}

export default function SelectedProducts(): JSX.Element {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    if (products === null) {
      const fetchProducts = async () => {
        await axios
          .get<Product[]>('http://localhost:3000/product/all')
          .then((response) => setProducts(response.data));
      };

      fetchProducts();
    }
  }, [products]);

  const productsList = products?.map((product) =>
    getListItemFromProducts(product),
  );

  return (
    <section id="selected-products">
      <h2 className="section-title">Ours Products</h2>
      <ul className="products">{productsList}</ul>
      <p>
        <Link to="/shop">See more</Link>
      </p>
    </section>
  );
}

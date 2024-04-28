import { useEffect, useState } from 'react';
import {
  RiLayoutGridFill,
  RiEqualizerLine,
  RiLayoutGridLine,
  RiExpandUpDownLine,
  RiExpandUpDownFill,
  RiArrowUpFill,
  RiArrowDownFill,
} from 'react-icons/ri';
import ProductItem, { ProductItemProps as Product } from './ProductItem';

import './FilterBar.css';
import axios from 'axios';

type ProductsPage = { page: Product[]; count: number; index: number };

function PageListCount(
  currentIndex: number,
  itemPerPage: number,
  totalItems: number,
) {
  let pageListItems = [];

  for (let index = 0; index < Math.ceil(totalItems / itemPerPage); index++) {
    pageListItems.push(
      <li
        key={index + 1}
        className={index === currentIndex ? 'current-page' : 'other-page'}
      >
        {index + 1}
      </li>,
    );
  }

  return pageListItems;
}

export default function FilterBar(): JSX.Element {
  const [itemPerPage, setItemsPerPage] = useState<number>(16);
  const [products, setProducts] = useState<ProductsPage>();
  const [sortBy, setSortBy] = useState<string>('name');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get<ProductsPage>(
          `http://localhost:3000/product/all?sort=${sortBy}&order=${order}&limit=${itemPerPage}&page=${0}`,
        )
        .then((response) => {
          setProducts(response.data);
        })
        .catch((e) => console.log(e));
    };

    fetchProducts();
  }, [itemPerPage, products, sortBy, order]);

  return (
    <div className="container">
      <div id="filter-bar">
        <header>
          <p id="filter-button">
            <RiEqualizerLine />
            <span>Filter</span>
          </p>
          <button
            type="button"
            title="enable grid display"
            onClick={(e) => setLayout('grid')}
          >
            {layout === 'grid' ? <RiLayoutGridFill /> : <RiLayoutGridLine />}
          </button>
          <button
            type="button"
            title="enable list display"
            onClick={(e) => setLayout('list')}
          >
            {layout === 'grid' ? (
              <RiExpandUpDownLine />
            ) : (
              <RiExpandUpDownFill />
            )}
          </button>
        </header>
        <p>
          Showing {itemPerPage * (products ? products.index : 0) + 1}-
          {itemPerPage * (products ? products.index : 0)} of{' '}
          {products ? products.count : 0} results
        </p>
        <footer>
          <p>
            <label htmlFor="items-per-page">Show</label>
            <select
              name="items-per-page"
              id="items-per-page"
              onChange={(e) => setItemsPerPage(+e.target.value)}
            >
              <option defaultValue="true" value="16">
                16
              </option>
              <option value="32">32</option>
              <option value="64">64</option>
            </select>
          </p>
          <p>
            <label htmlFor="sort-by">Sort By</label>
            <select
              name="sort-by"
              id="sort-by"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option defaultValue="true" value="name">
                name
              </option>
              <option value="price">price</option>
              <option value="new">new</option>
            </select>
          </p>
          <p>
            <label htmlFor="order">Order</label>
            <button
              name="order"
              type="button"
              title="ordering by"
              onClick={(e) => setOrder(order === 'asc' ? 'desc' : 'asc')}
            >
              {order === 'asc' ? <RiArrowUpFill /> : <RiArrowDownFill />}
              {order}
            </button>
          </p>
        </footer>
      </div>
      <div className="product-list">
        <ul className="products">
          {products?.page.map((product, index) => {
            return (
              <li key={index + 1}>
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
          })}
        </ul>
        <ol className="page-index">
          {products && products?.index > 0 && (
            <li key="last" className="previous-page">
              previous
            </li>
          )}
          {products &&
            PageListCount(+products.index, +itemPerPage, +products.count)}
          {products &&
            products?.index < products?.count / itemPerPage &&
            products.count < 0 && (
              <li key="next" className="next-page">
                next
              </li>
            )}
        </ol>
      </div>
    </div>
  );
}

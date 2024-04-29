import { useCallback, useEffect, useState } from 'react';
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
  const [products, setProducts] = useState<ProductsPage>({
    page: [],
    index: 0,
    count: 0,
  });
  const [sortBy, setSortBy] = useState<string>('name');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [enableFetch, setEnableFetch] = useState<boolean>(true);
  const [items, setItems] = useState<JSX.Element[]>([]);

  const getLIfromProductsItem = useCallback(() =>
    products.page.map((product, index) => (
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
    )), [products]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (enableFetch) {
        await axios
          .get<ProductsPage>(
            `http://localhost:3000/product/all?sort=${sortBy}&order=${order}&limit=${itemPerPage}&page=${0}`,
          )
          .then((response) => {
            setProducts(response.data);
            setItems(getLIfromProductsItem());
          })
          .catch((e) => console.log(e));

        setEnableFetch(false);
      }
    };

    fetchProducts();
  }, [
    itemPerPage,
    sortBy,
    order,
    products,
    enableFetch,
    getLIfromProductsItem,
  ]);

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
              onChange={(e) => {
                setEnableFetch(true);
                setItemsPerPage(+e.target.value);
              }}
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
              onChange={(e) => {
                setEnableFetch(true);
                setSortBy(e.target.value);
              }}
              value={sortBy}
            >
              <option value="name">name</option>
              <option value="price">price</option>
              <option value="is_new">new</option>
            </select>
          </p>
          <p>
            <label htmlFor="order">Order</label>
            <button
              name="order"
              type="button"
              title="ordering by"
              onClick={(e) => {
                setEnableFetch(true);
                setOrder(order === 'asc' ? 'desc' : 'asc');
              }}
            >
              {order === 'asc' ? <RiArrowUpFill /> : <RiArrowDownFill />}
              {order}
            </button>
          </p>
        </footer>
      </div>
      <div className="product-list">
        <ul className={`products ${layout}`}>
          { items.length === 0 ? getLIfromProductsItem() : items}
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
            products.count > itemPerPage &&
            products.index < Math.ceil(products.count / itemPerPage) && (
              <li key="next" className="next-page">
                next
              </li>
            )}
        </ol>
      </div>
    </div>
  );
}

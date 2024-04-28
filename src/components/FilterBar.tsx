import { useState } from 'react';
import {
  RiLayoutGridFill,
  RiEqualizerLine,
  RiLayoutGridLine,
  RiExpandUpDownLine,
  RiExpandUpDownFill,
  RiArrowUpFill,
  RiArrowDownFill,
} from 'react-icons/ri';
import './FilterBar.css';

export default function FilterBar(): JSX.Element {
  const [itemPerPage, setItemsPerPage] = useState<number>(16);
  const [indexPage, setIndexPage] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  return (
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
          {layout === 'grid' ? <RiExpandUpDownLine /> : <RiExpandUpDownFill />}
        </button>
      </header>
      <p>
        Showing {itemPerPage * indexPage + 1}-{itemPerPage * indexPage} of {}{' '}
        results
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
  );
}

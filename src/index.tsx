import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ShopPage from './pages/ShopPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/shop',
    element: <ShopPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/shop/category/:productId',
        element: <div>Category</div>,
      },
      {
        path: '/shop/product/:productId',
        element: <div>Product</div>,
      },
    ],
  },
  {
    path: '/about',
    element: <div>About page</div>,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/contact',
    element: <div>Contact page</div>,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/account',
    element: <div>Account page</div>,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/search',
    element: <div>Search page</div>,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/favorites',
    element: <div>Favorites page</div>,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/cart',
    element: <div>Cart page</div>,
    errorElement: <NotFoundPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

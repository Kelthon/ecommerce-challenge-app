import React from 'react';
import './PageCover.css';
import RouterLocation from '../components/RouterLocation';
import placeholder from './placeholder.jpg';

interface PageCoverProps {
  title: string;
}

export default function PageCover({ title }: PageCoverProps): JSX.Element {
  return (
    <section id="page-cover">
      <h2>{title}</h2>
      <RouterLocation />
      <img src={placeholder} alt="shop page" />
    </section>
  );
}

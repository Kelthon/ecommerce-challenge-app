import React from 'react';
import './PageCover.css';
import RouterLocation from '../components/RouterLocation';
import placeholder from './placeholder.jpg';
import ImageWithFallback from './ImageWithFallback';

interface PageCoverProps {
  title: string;
  img?: string;
}

export default function PageCover({ title, img }: PageCoverProps): JSX.Element {
  return (
    <section id="page-cover">
      <h2>{title}</h2>
      <RouterLocation />
      <ImageWithFallback src={img} fallback={placeholder} alt="shop page" />
    </section>
  );
}

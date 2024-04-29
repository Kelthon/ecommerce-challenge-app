import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import SelectedProducts from '../components/SelectedProducts';
import FeatureBox from '../components/FeatureBox';
import Page from './Page';

export default function HomePage(): JSX.Element {
  return (
    <Page>
      <Banner />
      <Categories />
      <SelectedProducts title='Ours products'/>
      <FeatureBox />
    </Page>
  );
}

import React from 'react';
import Page from './Page';
import FeatureBox from '../components/FeatureBox';
import PageCover from '../components/PageCover';
import FilterBar from '../components/FilterBar';

export default function ShopPage(): JSX.Element {
  return (
    <>
      <Page>
        <PageCover title="Shop" />
        <FilterBar />
        <FeatureBox />
      </Page>
    </>
  );
}

import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import FeatureBox from './components/FeatureBox';
import Categories from './components/Categories';

export default function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <FeatureBox />
      <Footer />
    </>
  );
}

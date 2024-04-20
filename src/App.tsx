import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';

export default function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Banner />
      <Footer />
    </>
  );
}

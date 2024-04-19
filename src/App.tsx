import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import './App.css';

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Banner />
      <Footer />
    </>
  );
}

export default App;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Page.css';

type PageProps = {
  children?: React.ReactNode;
};

export default function Page({ children }: PageProps): JSX.Element {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  );
}

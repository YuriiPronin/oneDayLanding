import React from 'react';
import { Header } from '../components/HomePage/Header/Header';
import { PopularHeader } from '../components/Popular/PopularHeader/PopularHeader';
import { PopularBlock1 } from '../components/Popular/PopularBlock1/PopularBlock1';
import { PopularBlock2 } from '../components/Popular/PopularBlock2/PopularBlock2';
import { PopularBlock3 } from '../components/Popular/PopularBlock3/PopularBlock3';
import { Footer } from '../components/HomePage/Footer/Footer';

export const PopularPage = () => {
  return (
    <>
      <Header/>
      <PopularHeader />
      <PopularBlock1 />
      <PopularBlock2 />
      <PopularBlock3 />
      <Footer />
    </>
  );
};

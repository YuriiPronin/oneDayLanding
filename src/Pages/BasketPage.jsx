import React from 'react';
import { Header } from '../components/HomePage/Header/Header';
import { Footer } from '../components/HomePage/Footer/Footer';
import { Basket } from '../components/BasketPage/Basket';

export const BasketPage = () => {
  return (
    <>
      <Header />
      <Basket />
      <Footer />
    </>
  );
};

import React from 'react';
import { Header } from '../components/HomePage/Header/Header';
import { Footer } from '../components/HomePage/Footer/Footer';
import { BasketOrder } from '../components/BasketOrderPage/BasketOrder';

export const BasketOrderPage = () => {
  return (
    <>
      <Header />
      <BasketOrder />
      <Footer/>
    </>
  );
};

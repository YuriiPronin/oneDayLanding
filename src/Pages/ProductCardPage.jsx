import React from 'react';
import { Header } from '../components/HomePage/Header/Header';
import { ProductCardHeader } from '../components/ProductCard/ProductCardHeader/ProductCardHeader';
import { ProductCardBlock1 } from '../components/ProductCard/ProductCardBlock1/ProductCardBlock1';
import { ProductCardBlock2 } from '../components/ProductCard/ProductCardBlock2/ProductCardBlock2';
import { Footer } from '../components/HomePage/Footer/Footer';

export const ProductCardPage = () => {
  return (
    <>
      <Header/>
      <ProductCardHeader />
      <ProductCardBlock1 />
      <ProductCardBlock2 />
      <Footer/>
    </>
  );
};

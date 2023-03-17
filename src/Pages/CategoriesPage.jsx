import { React } from 'react';
import { Header } from '../components/HomePage/Header/Header';
import { CategoriesMain } from '../components/CategoriesPage/CategoriesMain/CategoriesMain';
import { Footer } from '../components/HomePage/Footer/Footer';

export const CategoriesPage = () => {
  return (
    <>
      <Header/>
      <CategoriesMain/>
      <Footer/>
    </>
  );
};

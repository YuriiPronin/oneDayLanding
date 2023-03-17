import { React } from 'react';
import { Header } from '../components/HomePage/Header/Header';
import { AccountOrderMain } from '../components/AccountOrderPage/AccountOrderMain/AccountOrderMain';
import { Footer } from '../components/HomePage/Footer/Footer';

export const AccountOrderPage = () => {
  return (
    <>
      <Header />
      <AccountOrderMain />
      <Footer/>
    </>
  );
};

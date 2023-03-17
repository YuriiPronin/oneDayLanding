import { React } from 'react';
import { Header } from '../components/HomePage/Header/Header';
import { AccountEnterMain } from '../components/AccountEnterPage/AccountEnterMain/AccountEnterMain';
import { Footer } from '../components/HomePage/Footer/Footer';

export const AccountEnterPage = () => {
  return (
    <>
      <Header />
      <AccountEnterMain />
      <Footer/>
    </>
  );
};

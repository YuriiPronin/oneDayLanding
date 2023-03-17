import { React } from 'react';
import { Header } from '../components/HomePage/Header/Header';
import { AccountInformationMain } from '../components/AccountInformationPage/AccountInformationMain/AccountInformationMain';
import { Footer } from '../components/HomePage/Footer/Footer';

export const AccountInformationPage = () => {
  return (
    <>
      <Header />
      <AccountInformationMain/>
      <Footer />
    </>
  );
};

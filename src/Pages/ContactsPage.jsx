import { React } from 'react';
import { Header } from '../components/HomePage/Header/Header';
import { ContactsMain } from '../components/ContactsPage/ContactsMain/ContactsMain';
import { Footer } from '../components/HomePage/Footer/Footer';

export const ContactsPage = () => {
  return (
    <>
      <Header />
      <ContactsMain />
      <Footer />
    </>
  );
};

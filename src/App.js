import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './Pages/HomePage';
import { PopularPage } from './Pages/PopularPage';
import { ProductCardPage } from './Pages/ProductCardPage';
import { CategoriesPage } from './Pages/CategoriesPage';
import { ContactsPage } from './Pages/ContactsPage';
import { AccountEnterPage } from './Pages/AccountEnterPage';
import { AccountInformationPage } from './Pages/AccountInformationPage';
import { AccountOrderPage } from './Pages/AccountOrderPage';

function App () {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/popular' element={<PopularPage />}/>
        <Route path='/products' element={<ProductCardPage />}/>
        <Route path='https://onedaylanding.onrender.com/categories' element={<CategoriesPage />}/>
        <Route path='/contacts' element={<ContactsPage />}/>
        <Route path='/account' element={<AccountEnterPage />}/>
        <Route path='/account/information' element={<AccountInformationPage />}/>
        <Route path='/account/order' element={<AccountOrderPage />}/>
      </Routes>
    </div>
  );
}

export default App;

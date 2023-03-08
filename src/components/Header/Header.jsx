import React from 'react';
import '../Header/Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <a href={'/burger'}>
          <img src={require('../../images/burger.png')} alt="burger menu" />
        </a>

        <img className='header__img' src={require('../../images/zerifIcon.png')} alt="main logo" />

        <a href={'/search'}>
          <img src={require('../../images/searchIcon.png')} alt="search" />
        </a>

        <a href={'/account'}>
          <img src={require('../../images/phoneIcon.png')} alt="phone" />
        </a>

        <a href={'/mail'}>
          <img src={require('../../images/personIcon.png')} alt="account" />
        </a>

        <a href='/mail'>
          <img src={require('../../images/mailIcon.png')} alt="mail" />
        </a>
      </nav>
      <div className='header__сontent'>
        <img src={require('../../images/headerBackground.png')} alt="bacground image" />
        <div className='header__content--block'>
          <h3 className='h3'>Lorem ipsum <br/> Dolor sit amet</h3>
          <p className='p'>Lorem ipsum dolor sit amet, <br/> Consectetur adipiscing elit <br/> Sed do eiusmod tempor</p>
          <button className='header__content--button'>Оформить заказ</button>
        </div>
      </div>
    </header>
  );
};

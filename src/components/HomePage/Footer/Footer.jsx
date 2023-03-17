import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.scss';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__block1'>
        <img
          src={require('../../../images/HomePage/footerZerif.png')}
          alt="logo image"
          className='footer__block1--icon'
        />
        <p className='footer__block1--text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='footer__block1--links'>
          <Link to={'viberLink'}>
            <img src={require('../../../images/HomePage/viberIcon.png')} alt="viber icon" />
          </Link>
          <Link to={'facebookLink'}>
            <img src={require('../../../images/HomePage/facebookIcon.png')} alt="facebook icon" />
          </Link>
          <Link to={'youtubeLink'}>
            <img src={require('../../../images/HomePage/youtubeIcon.png')} alt="youtube icon" />
          </Link>
          <Link to={'watsapLink'}>
            <img src={require('../../../images/HomePage/watsapIcon.png')} alt="watsap icon" />
          </Link>
          <Link to={'telegramLink'}>
            <img src={require('../../../images/HomePage/telegramIcon.png')} alt="telegram icon" />
          </Link>
        </div>
      </div>

      <div className='oneMoreFooter'>
        <Link to={'/'} className='oneMoreFooter__link'>Главная</Link>
        <Link to={'/popular'} className='oneMoreFooter__link'>Популярное</Link>
        <Link to={'/products'} className='oneMoreFooter__link'>Товары</Link>
        <Link to={'/contacts'} className='oneMoreFooter__link'>Контакты</Link>
        <Link to={'/account'} className='oneMoreFooter__link'>Личный кабинет</Link>
      </div>

      <div className='footer__block2'>
        <div>
          <p className='footer__block2--text'>Контакты:</p>
          <p className='footer__block2--text'>+ 3 000 000 00 00</p>
          <p className='footer__block2--text'>+ 3 000 000 00 00</p>
        </div>
        <div>
          <p className='footer__block2--text'>Почта:</p>
          <p className='footer__block2--text'>zefir@gmail.com</p>
        </div>
      </div>

      <div className='footer__block3'>
        <p className='footer__block3--text'>График работы:</p>
        <p className='footer__block3--text'>Ежедневно с 09:00 до 21:00</p>
      </div>
    </div>
  );
};

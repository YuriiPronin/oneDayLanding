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
        <p className='socialMedia'>Социальные сети:</p>
        <div className='footer__block1--links'>
          <Link to={''}>
            <img src={require('../../../images/HomePage/viberIcon.png')} alt="viber icon" />
          </Link>
          <Link to={''}>
            <img src={require('../../../images/HomePage/facebookIcon.png')} alt="facebook icon" />
          </Link>
          <Link to={''}>
            <img src={require('../../../images/HomePage/youtubeIcon.png')} alt="youtube icon" />
          </Link>
          <Link to={''}>
            <img src={require('../../../images/HomePage/watsapIcon.png')} alt="watsap icon" />
          </Link>
          <Link to={''}>
            <img src={require('../../../images/HomePage/telegramIcon.png')} alt="telegram icon" />
          </Link>
        </div>
      </div>

      <div className='oneMoreFooter'>
        <Link to={'/'} className='oneMoreFooter__link'><span>Главная</span></Link>
        <Link to={'/popular'} className='oneMoreFooter__link'><span>Популярное</span></Link>
        <Link to={'/products'} className='oneMoreFooter__link'><span>Товары</span></Link>
        <Link to={'/contacts'} className='oneMoreFooter__link'><span>Контакты</span></Link>
        <Link to={'/account'} className='oneMoreFooter__link'><span>Личный кабинет</span></Link>
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
        <p className='footer__block3--text'>Ежедневно</p>
        <p className='footer__block3--time'>с 09:00 до 21:00</p>
      </div>
    </div>
  );
};

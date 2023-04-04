import React from 'react';
import '../BasketPage/Basket.scss';
import { Link } from 'react-router-dom';

export const Basket = () => {
  return (
    <div className="basket">
      <p className="basket__title">Корзина</p>
      <div className='basketBox'>
        <div className="basketBlock1">
          <div className='imgBlock'>
            <img
              src={require('../../images/BasketPage/productImage.png')}
              alt="product image"
              className='basketBlock1__img'
            />
          </div>
          <div className='counterBlock'>
            <p className='basketBlock1__title'>Торт с ягодами</p>
            <div className='basketBlock1__counterBox'>
              <button className='basketBlock1__counterButton'> - </button>
              <p className='basketBlock1__counterText'>2</p>
              <button className='basketBlock1__counterButton'> + </button>
            </div>
          </div>
          <div className='priceNcloseBlock'>
            <p className='basketBlock1__price'>50$</p>
            <img
              src={require('../../images/BasketPage/closeIcon.png')}
              alt=""
              className='basketBlock1__resetButton'
            />
          </div>
        </div>
        <hr />
        <div className="basketBlock2">
          <div className='basketBlock2__productPrice'>
            <p className='basketBlock2__text'>Товар:</p>
            <p className='basketBlock2__text'>100$</p>
          </div>
          <div className='basketBlock2__delivery'>
            <p className='basketBlock2__text'>Доставка:</p>
            <p className='basketBlock2__text'>По тарифам перевозчика</p>
          </div>
          <div className='basketBlock2__fullCoast'>
            <p className='basketBlock2__textBald'>Всего:</p>
            <p className='basketBlock2__textBald'>100$</p>
          </div>
        </div>
      </div>
      <button className='basket__button'> <Link to={'/basket/order'} className='helperLink'> Оформить заказ </Link></button>
    </div>
  );
};

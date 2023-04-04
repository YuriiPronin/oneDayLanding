import React from 'react';
import '../BasketOrderPage/BasketOrder.scss';
import '../BasketPage/Basket.scss';

export const BasketOrder = () => {
  return (
    <div className="basketOrder">
      <p className="basketOrder__title">Оформление заказа</p>
      <div className="desctopDisplay">
        <form className="basketOrderBox">
          <p className="basketOrder__mainText">Имя</p>
          <input type="text" className="basketOrder__input" />
          <p className="basketOrder__mainText">Номер телефона</p>
          <input type="text" className="basketOrder__input" />
          <p className="basketOrder__mainText">Адрес доставки</p>
          <input type="text" className="basketOrder__input" />
          <p className="basketOrder__mainText">Оплата</p>
          <div className="basketOrder__radio">
            <input type="radio" id="cardPay" value="card" name="payment" />
            <label htmlFor="cardPay">Карта</label>
          </div>
          <div className="basketOrder__radio">
            <input type="radio" id="cashPay" value="cash" name="payment" />
            <label htmlFor="cashPay">Наличные</label>
          </div>
          <p className="basketOrder__mainText">Комментарий</p>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="basketOrder__textarea"
          ></textarea>
          <button className="basketOrder__button">Оформить заказ</button>
        </form>

        <div className='desctopBlock'>
          <div className='basketBox2'>
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
                <p className='price'>50$</p>
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
        </div>
      </div>
    </div>
  );
};

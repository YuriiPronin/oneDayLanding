import React from 'react';
import '../ProductCardHeader/ProductCardHeader.scss';
import '../../../styles/max1440.scss';

export const ProductCardHeader = () => {
  return (
    <header className="header">
      <div className="productCardHeader">
        <div className='max1440'>
          <p className="productCardHeader__title">Товары / десерты</p>
          <div className="desktopDisplay">
            <img
              src={require('../../../images/ProductCard/productCardPhoto.png')}
              alt=""
              className="productCardHeader__img"
            />
            <img
              src={require('../../../images/ProductCard/sideImg1.png')}
              alt="small pie image"
              className="sideImg1"
            />
            <img
              src={require('../../../images/ProductCard/sideImg2.png')}
              alt="small pie image"
              className="sideImg2"
            />
            <img
              src={require('../../../images/ProductCard/sideImg3.png')}
              alt="small pie image"
              className="sideImg3"
            />
            <img
              src={require('../../../images/ProductCard/sideImg4.png')}
              alt="small pie image"
              className="sideImg4"
            />
            <div>
              <p className="productCardHeader__title2">Торт с ягодами</p>
              <p className="productCardHeader__price">Цена - 50,00 $ </p>
              <p className="productCardHeader__descriptionTitle">Описание:</p>
              <p className="productCardHeader__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor
              </p>
              <p className="productCardHeader__weight">
                <b>Вес</b> - 2 кг
              </p>
              <p className="productCardHeader__taste">
                <b>Вкус</b> - воздушный бисквит с шоколадной крошкой и нежными
                ягодными нотками
              </p>
              <div>
                <button className="productCardHeader__basketButton">
                  Добавить в корзину
                </button>
                <div className="counterBox">
                  <button className="productCardHeader__counterButton">
                    -
                  </button>
                  <p className="productCardHeader__counterTitle">1</p>
                  <button className="productCardHeader__counterButton">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

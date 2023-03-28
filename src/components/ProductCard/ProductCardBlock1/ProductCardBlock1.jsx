import { React } from 'react';
import '../ProductCardBlock1/ProductCardBlock1.scss';
import '../../../styles/max1440.scss';

export const ProductCardBlock1 = () => {
  return (
    <div className="productCardBlock1">
      <div className='max1440'>
        <button className="productCardBlock1__button1">Отзывы</button>
        <button className="productCardBlock1__button2">Подробности</button>
        <button className="productCardBlock1__desktopButton">
          Дополнительная информация
        </button>
        <p className="productCardBlock1__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
          in molestie diam bibendum sed.
        </p>
      </div>
    </div>
  );
};

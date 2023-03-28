import { React } from 'react';
import '../ProductCardBlock2/ProductCardBlock2.scss';
import '../../../styles/max1440.scss';

export const ProductCardBlock2 = () => {
  return (
    <div className="productCardBlock2">
      <div className='max1440'>
        <p className="productCardBlock2__title1">Похожие товары:</p>
        <div className="display">
          <div>
            <img
              src={require('../../../images/ProductCard/sameProductPhoto.png')}
              alt="product photo"
              className="productCardBlock2__img"
            />
            <p className="productCardBlock2__title2">Десерт с клубникой</p>
            <p className="productCardBlock2__price">$ 30,00</p>
          </div>
          <div className="desktop">
            <img
              src={require('../../../images/ProductCard/sameProductPhoto2.png')}
              alt="product photo"
              className="productCardBlock2__img"
            />
            <p className="productCardBlock2__title2">Шарлотка с корицей</p>
            <p className="productCardBlock2__price">$ 25,00</p>
          </div>
          <div className="desktop">
            <img
              src={require('../../../images/ProductCard/sameProductPhoto3.png')}
              alt="product photo"
              className="productCardBlock2__img"
            />
            <p className="productCardBlock2__title2">Торт с ягодами</p>
            <p className="productCardBlock2__price">$ 30,00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

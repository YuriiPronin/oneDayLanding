import { React } from 'react';
import '../Main/Main.scss';
import '../../../styles/max1440.scss';

export const Main = () => {
  return (
    <div className="main">
      <div className='max1440'>
        <img
          className="mobileImg"
          src={require('../../../images/HomePage/headerBackground.png')}
          alt="bacground image"
        />
        <div className="main__block">
          <h3 className="h3">Lorem ipsum Dolor sit amet</h3>
          <p className="p">
            Lorem ipsum dolor sit amet, Consectetur adipiscing elit Sed do
            eiusmod tempor
          </p>
          <button className="main__button">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

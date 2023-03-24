import React from 'react';
import '../HideBody1/HideBody1.scss';

export const HideBody1 = () => {
  return (
    <div className="hideBody1">
      <div className="hideBody1__content">
        <h3 className="hideBody1__content--title">
        У Нас Своё Производство
        </h3>
        <p className="hideBody1__content--description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="hideBody1__content--button">Оформить заказ</button>
      </div>

      <img
        src={require('../../../images/HomePage/hidenPie.png')}
        alt=""
        className='hidenPie'
      />
    </div>
  );
};

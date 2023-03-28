import React from 'react';
import '../HideBody2/HideBody2.scss';
import '../../../styles/max1440.scss';

export const HideBody2 = () => {
  return (
    <div className="hideBody2">
      <div className='max1440'>
        <div className="hideBody2__content">
          <div className="contentSide">
            <h3 className="hideBody2__content--title">Авторские рецепты</h3>
            <p className="hideBody2__content--description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
            <button className="hideBody2__content--button">
              Оформить заказ
            </button>
          </div>
        </div>
        <img
          src={require('../../../images/HiddenBlock2/1.png')}
          alt=""
          className="fullPlate"
        />
      </div>
    </div>
  );
};

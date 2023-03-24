import React from 'react';
import '../Body3/Body3.scss';
import { body3Api } from '../../../API/Body3API';

export const Body3 = () => {
  return (
    <div className="body3">
      <p className="body3__title1">Рекомендуем</p>
      <p className="body3__title2">Авторские десерты</p>

      <div className="container3">
        {body3Api.map((card) => (
          <div className="card3" key={card.id}>
            <img src={require(`../../../images/HomePage/body3/${card.id}.png`)} alt="" className="card3__photo" />
            <p className="card3__title">{card.title}</p>
            <p className="card3__description">{card.description}</p>
          </div>
        ))}
      </div>

      <button className="body3__button"> <span>Весь ассортимент &#10095;</span> </button>
    </div>
  );
};

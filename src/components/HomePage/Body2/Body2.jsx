import React from 'react';
import '../Body2/Body2.scss';
import '../../../styles/max1440.scss';
import { body2Api } from '../../../API/Body2API';

export const Body2 = () => {
  return (
    <div className="body2">
      <div className='max1440'>
        <p className="body2__title1">Рекомендуем</p>
        <p className="body2__title2">Торты на любой вкус</p>

        <div className="container2">
          {body2Api.map((card) => (
            <div className="card2" key={card.id}>
              <img
                src={require(`../../../images/HomePage/body2/${card.id}.png`)}
                alt="card photo"
                className="card2__photo"
              />
              <p className="card2__title">{card.title}</p>
              <p className="card2__description">{card.description}</p>
            </div>
          ))}
        </div>

        <button className="body2__button">
          {' '}
          <span>Весь ассортимент &#10095;</span>{' '}
        </button>
      </div>
    </div>
  );
};

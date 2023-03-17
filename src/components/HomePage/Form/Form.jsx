import React from 'react';
import '../Form/Form.scss';

export const Form = () => {
  return (
    <div className='form'>
      <div className='form__content'>
        <p className='form__content--title1'> Не знаете что выбрать?</p>
        <p className='form__content--title2'> Заполните форму ниже и мы с Вами свяжемся! </p>

        <form action="" className='inputs'>
          <p className='inputs__title'>Имя:</p>
          <input
            type="text"
            className='inputs__input'
            placeholder='Введите Ваше имя'
          />
          <p className='inputs__title'>Телефон:</p>
          <input
            type="text"
            className='inputs__input'
            placeholder='Введите Ваш телефон'
          />
          <button className='inputs__button'>Отправить</button>

          <img
            src={require('../../../images/HomePage/formPie.png')}
            alt=""
            className='fullPie'
          />
        </form>
      </div>
    </div>
  );
};

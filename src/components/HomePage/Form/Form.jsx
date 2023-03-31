import React from 'react';
import '../Form/Form.scss';
import '../../../styles/max1440.scss';

export const Form = () => {
  return (
    <div className="form">
      <div className="max1440">
        <div className="tillDesctop">
          <div className="form__content">
            <div className="formSide">
              <p className="form__content--title1"> Не знаете что выбрать?</p>
              <p className="form__content--title2">
                Заполните форму ниже и мы обязательно с Вами свяжемся!
              </p>

              <form action="" className="inputs">
                <p className="inputs__title">Имя:</p>
                <input
                  type="text"
                  className="inputs__input"
                  placeholder="Введите Ваше имя"
                />
                <p className="inputs__title">Телефон:</p>
                <input
                  type="text"
                  className="inputs__input"
                  placeholder="Введите Ваш телефон"
                />
                <button className="inputs__button">Отправить</button>

                <img
                  src={require('../../../images/HomePage/formPieNew.png')}
                  alt=""
                  className="fullPie"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="onDesctop">
          <div className="blockRd2">
            <div className="blockRd2__someContent">
              <div className="someContentSide2">
                <p className="form__content--title1"> Не знаете что выбрать?</p>
                <p className="form__content--title2">
                  Заполните форму ниже и мы обязательно с Вами свяжемся!
                </p>

                <form action="" className="inputs">
                  <p className="inputs__title">Имя:</p>
                  <input
                    type="text"
                    className="inputs__input"
                    placeholder="Введите Ваше имя"
                  />
                  <p className="inputs__title">Телефон:</p>
                  <input
                    type="text"
                    className="inputs__input"
                    placeholder="Введите Ваш телефон"
                  />
                  <button className="inputs__button">Отправить</button>
                </form>
              </div>
            </div>
            <div className="blockRd2__imageWrap blockRd__imageWrap1">
              <img
                src={require('../../../images/HomePage/formBackgroundDesc.png')}
                alt=""
              />
            </div>
            <div className="blockRd2__imageWrap blockRd__imageWrap2">
              <img
                src={require('../../../images/HomePage/formPieNew2.png')}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

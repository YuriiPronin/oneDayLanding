import { React } from 'react';
import { Link } from 'react-router-dom';
import '../AccountEnterMain/AccountEnterMain.scss';
import '../../../styles/max1440.scss';

export const AccountEnterMain = () => {
  return (
    <div className="accountEnterMain">
      <div className='max1440'>
        <p className="accountEnterMain__title">Личный кабинет</p>
        <div className="buttonBox">
          <button className="accountEnterMain__enterButton">Вход</button>
          <button className="accountEnterMain__registrationButton">
            Регистрация
          </button>
        </div>
        <form action="">
          <input
            type="text"
            placeholder="email"
            className="accountEnterMain__input"
          />
          <input
            type="text"
            placeholder="пароль"
            className="accountEnterMain__input"
          />
          <div className="accountEnterMain__checkbox">
            <input type="checkbox" id="remember-password" />
            <label htmlFor="remember-password" className='checkboxText'>Запомнить меня</label>
          </div>
          <button className="accountEnterMain__submitButton">
            {' '}
            <Link to={'/account/information'} className="linkForPresentation">
              Войти
            </Link>{' '}
          </button>
        </form>
        <button className="accountEnterMain__forgotPassword">
          Забыли пароль?
        </button>
      </div>
    </div>
  );
};

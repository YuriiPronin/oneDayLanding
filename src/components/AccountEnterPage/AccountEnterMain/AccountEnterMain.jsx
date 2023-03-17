import { React } from 'react';
import '../AccountEnterMain/AccountEnterMain.scss';

export const AccountEnterMain = () => {
  return (
    <div className='accountEnterMain'>
      <p className='accountEnterMain__title'>Личный кабинет</p>
      <button className='accountEnterMain__enterButton'>Вход</button>
      <button className='accountEnterMain__registrationButton'>Регистрация</button>
      <form action="">
        <input
          type="text"
          placeholder='email'
          className='accountEnterMain__input'
        />
        <input
          type="text"
          placeholder='пароль'
          className='accountEnterMain__input'
        />
        <div className='accountEnterMain__checkbox'>
          <input
            type="checkbox"
            id='remember-password'
          />
          <label htmlFor="remember-password">Запомнить меня</label>
        </div>
        <button className='accountEnterMain__submitButton'>Войти</button>
      </form>
      <button className='accountEnterMain__forgotPassword'>Забыли пароль?</button>
    </div>
  );
};

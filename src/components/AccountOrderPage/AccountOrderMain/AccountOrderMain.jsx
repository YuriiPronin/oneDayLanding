import { React } from 'react';
import { Link } from 'react-router-dom';
import '../AccountOrderMain/AccountOrderMain.scss';
import '../../../styles/max1440.scss';

export const AccountOrderMain = () => {
  return (
    <div className="accountOrderMain">
      <div className='max1440'>
        <p className="accountOrderMain__mainTitle">Личный кабинет</p>
        <Link
          to={'/account/information'}
          className="accountOrderMain__infoButton"
        >
          Информация
        </Link>
        <Link to={'/account/order'} className="accountOrderMain__orderButton">
          Заказы
        </Link>
        <Link to={'/'} className="accountOrderMain__exitButton">
          Выход
        </Link>
        <div className="accountOrderMain__box">
          <div className="accountOrderMain__columns">
            <p className="accountOrderMain__titles">Номер заказа</p>
            <p className="accountOrderMain__titles">Дата</p>
            <p className="accountOrderMain__titles">Статус</p>
            <p className="accountOrderMain__titles">Сумма заказа</p>
            <p className="accountOrderMain__titles">Действия</p>
          </div>
          <div className="accountOrderMain__columns">
            <p className="accountOrderMain__text">7643980998990</p>
            <p className="accountOrderMain__text">10.02.23</p>
            <p className="accountOrderMain__text">В обработке</p>
            <p className="accountOrderMain__text">$ 105</p>
            <p className="accountOrderMain__text">Детали заказа</p>
          </div>
          <div className="accountOrderMain__columns">
            <p className="accountOrderMain__text">943980998990</p>
            <p className="accountOrderMain__text">02.02.23</p>
            <p className="accountOrderMain__text">Доставлено</p>
            <p className="accountOrderMain__text">$ 100</p>
            <p className="accountOrderMain__text">Детали заказа</p>
          </div>
          <div className="accountOrderMain__columns">
            <p className="accountOrderMain__text">879980998990</p>
            <p className="accountOrderMain__text">28.01.23</p>
            <p className="accountOrderMain__text">Доставлено</p>
            <p className="accountOrderMain__text">$ 65</p>
            <p className="accountOrderMain__text">Детали заказа</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import { React } from 'react';
import { Link } from 'react-router-dom';
import '../AccountInformationMain/AccountInformationMain.scss';
import '../../../styles/max1440.scss';

export const AccountInformationMain = () => {
  return (
    <div className="accountInformationMain">
      <div className='max1440'>
        <p className="accountInformationMain__text1 title">Личный кабинет</p>
        <Link
          to={'/account/information'}
          className="accountInformationMain__informationButton"
        >
          Информация
        </Link>
        <Link
          to={'/account/order'}
          className="accountInformationMain__orderButton"
        >
          Заказы
        </Link>
        <Link to={'/'} className="accountInformationMain__exitButton">
          Выход
        </Link>
        <div className="infoDisplay">
          <div className="infoDisplay__block">
            <p className="accountInformationMain__text1">ФИО</p>
            <img
              src={require('../../../images/AccountInformation/penIcon.png')}
              alt=""
              className="penIcon"
            />
            <p className="accountInformationMain__text2">
              Сидоренко Ника Андреевна
            </p>
            <p className="accountInformationMain__text1">Телефон</p>
            <img
              src={require('../../../images/AccountInformation/penIcon.png')}
              alt=""
              className="penIcon"
            />
            <p className="accountInformationMain__text2">+380666137641</p>
          </div>
          <div className="infoDisplay__block">
            <p className="accountInformationMain__text1">Email</p>
            <img
              src={require('../../../images/AccountInformation/penIcon.png')}
              alt=""
              className="penIcon"
            />
            <p className="accountInformationMain__text2">zefir@gmail.com</p>
            <p className="accountInformationMain__text1">Адрес доставки</p>
            <img
              src={require('../../../images/AccountInformation/penIcon.png')}
              alt=""
              className="penIcon"
            />
            <p className="accountInformationMain__text2 addPadd">
              ул. Дорогожицкая 3, г. Киев
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

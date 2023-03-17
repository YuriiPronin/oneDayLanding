import { React } from 'react';
import '../AccountInformationMain/AccountInformationMain.scss';

export const AccountInformationMain = () => {
  return (
    <div className="accountInformationMain">
      <p className="accountInformationMain__text1 title">Личный кабинет</p>
      <button className="accountInformationMain__informationButton">
        Информация
      </button>
      <button className="accountInformationMain__orderButton">Заказы</button>
      <button className="accountInformationMain__exitButton">Выход</button>
      <div className='infoDisplay'>
        <div>
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
        <div>
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
  );
};

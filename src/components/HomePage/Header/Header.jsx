import { React, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Header/Header.scss';

export const Header = () => {
  const [value, setValue] = useState('initial');
  const [hideInitialOption, setHideInitialOption] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState(true);
  const [isSearch, setIsSearch] = useState(false);

  const handleOnChange = (event) => {
    setValue(event.target.value);
    setHideInitialOption(false);
    const select = document.getElementById('my-select');
    window.location.href = select.options[select.selectedIndex].value;
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const selectOpen = () => {
    setIsSelect(false);
  };

  const selectClose = () => {
    setIsSelect(true);
  };

  const searchOpen = () => {
    setIsSearch(!isSearch);
  };

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <div className='burgLog'>
            <button onClick={handleOpen} className="burgerButton">
              <img
                src={require('../../../images/HomePage/burger.png')}
                alt="burger menu"
                className="header__burger"
              />
            </button>

            <Link to={'/'}><img
              className="header__img"
              src={require('../../../images/HomePage/zerifIcon.png')}
              alt="main logo"
            /></Link>
          </div>

          <div className="desctopLinks">
            <div>
              <NavLink
                to={'/'}
                className='desctopLinks__text'
                activeClassName='desctopLinks__text active'
              >
                Главная
              </NavLink>
            </div>
            <div>
              <NavLink
                to={'/popular'}
                className='desctopLinks__text'
                activeClassName='desctopLinks__text active'
              >
                Популярное
              </NavLink>
            </div>
            <div>
              <select
                value={value}
                onChange={handleOnChange}
                className="categoriesSelect"
                id='my-select'
              >
                <option value="initial" hidden={hideInitialOption}>
                  Товары
                </option>
                <option value="categories">- десерты</option>
                <option value="pies">- торты</option>
                <option value="bakery">- выпечка</option>
                <option value="chocoStrawberry">
                  - клубника и фрукты в шоколаде
                </option>
                <option value="sweets">- конфеты и шоколад</option>
                <option value="icecream">- мороженое</option>
              </select>
            </div>
            <div>
              <NavLink
                to={'/contacts'}
                className='desctopLinks__text'
                activeClassName='desctopLinks__text active'
              >
                  Контакты
              </NavLink>
            </div>
            {isSearch && (
              <div>
                <form action="">
                  <input type="text" className='searchInput'/>
                </form>
              </div>
            )}
          </div>
          <div className='iconBox'>
            <Link onClick={searchOpen}>
              <img
                src={require('../../../images/HomePage/searchIcon.png')}
                alt="search"
              />
            </Link>

            <Link to={'/phone'}>
              <img
                src={require('../../../images/HomePage/phoneIcon.png')}
                alt="phone"
              />
            </Link>

            <Link to={'/account'}>
              <img
                src={require('../../../images/HomePage/personIcon.png')}
                alt="account"
              />
            </Link>

            <Link to={'/basket'}>
              <img
                src={require('../../../images/HomePage/basketIcon.png')}
                alt="basket"
              />
            </Link>
          </div>

          <div className='language'>
            <p className='language__text'>RU</p>
            <img src={require('../../../images/HomePage/downIcon.png')} alt="" className='language__icon'/>
          </div>
        </nav>
        {isSearch && (
          <div className='searchList'>
            <img src={require('../../../images/BasketPage/productImage.png')} alt="" className='searchList__image'/>
            <p className='searchList__title'>Торт с ягодами</p>
            <p className='searchList__price'>50$</p>
          </div>
        )}
      </header>

      {isOpen && (
        <div className="burgerMenu">
          <button className="closeButton">
            <img
              src={require('../../../images/HomePage/closeIcon.png')}
              alt="close button"
              onClick={handleClose}
            />
          </button>
          <div className="desctopLinksBurger">
            <div>
              <Link to={'/'} className="desctopLinksBurger__text underline">
                Главная
              </Link>
            </div>
            <div>
              <Link to={'/popular'} className="desctopLinksBurger__text">
                Популярное
              </Link>
            </div>
            <div>
              {isSelect
                ? (
                  <button className="selectButton" onClick={selectOpen}>
                    Товары
                    <img
                      src={require('../../../images/HomePage/downIcon.png')}
                      alt="down icon"
                      className="burgerSelectIcon"
                    />
                  </button>
                )
                : (
                  <div className="burgerLinks">
                    <button className="selectButton" onClick={selectClose}>
                    Товары
                      <img
                        src={require('../../../images/HomePage/upIcon.png')}
                        alt="down icon"
                        className="burgerSelectIcon"
                      />
                    </button>
                    <Link className="select">- десерты</Link>
                    <Link className="select">- торты</Link>
                    <Link className="select">- выпечка</Link>
                    <Link className="select">- клубника и фрукты в шоколаде</Link>
                    <Link className="select">- конфеты и шоколад</Link>
                    <Link className="select">- мороженое</Link>
                  </div>
                )}
            </div>
            <div>
              <Link to={'/contacts'} className="desctopLinksBurger__text">
                Контакты
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

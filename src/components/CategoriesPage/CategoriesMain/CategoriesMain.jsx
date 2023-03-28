import { React } from 'react';
import '../CategoriesMain/CategoriesMain.scss';
import '../../../styles/max1440.scss';
import { categoriesApi } from '../../../API/CategorisAPI';

export const CategoriesMain = () => {
  return (
    <div className="categoriesMain">
      <div className='max1440'>
        <p className="categoriesMain__title">Товары / десерты</p>
        <div className="categoriesMain__boxDisplay">
          {categoriesApi.map((product) => (
            <div className="categoriesMain__box" key={product.id}>
              <img
                src={require(`../../../images/Categories/Pagination/${product.id}.png`)}
                alt=""
                className="categoriesMain__img"
              />
              <p className="categoriesMain__productTitle">{product.title}</p>
              <p className="categoriesMain__price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

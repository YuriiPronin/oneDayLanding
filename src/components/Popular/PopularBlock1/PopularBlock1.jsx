import { React } from 'react';
import '../PopularBlock1/PopularBlock1.scss';
import { body1Api } from '../../../API/Body1API';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

export const PopularBlock1 = () => {
  return (
    <div className="popularBlock1">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          '@0.75': {
            slidesPerView: 1,
            spaceBetween: 20
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }}
        scrollbar={{
          hide: false
        }}
        modules={[Scrollbar]}
        className="mySwiper swiper_container"
      >
        {body1Api.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="swiperBox1">
              <img
                src={require(`../../../images/Popular/Pagination/${product.id}.png`)}
                alt=""
                className="swiperBox1__img"
              />
              <p className="swiperBox1__title">{product.title}</p>
              <p className="swiperBox1__price">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="popularBlock1__button"> <span>Весь ассортимент &gt;</span> </button>
    </div>
  );
};

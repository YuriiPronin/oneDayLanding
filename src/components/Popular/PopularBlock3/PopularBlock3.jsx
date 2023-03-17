import React from 'react';
import '../PopularBlock3/PopularBlock3.scss';
import { body1Api } from '../../../API/Body1API';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';

export const PopularBlock3 = () => {
  return (
    <div className="popularBlock3">
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
        className="mySwiper"
      >
        {body1Api.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="swiperBox2">
              <img
                src={require(`../../../images/HomePage/body1/${product.id}.png`)}
                alt=""
                className="swiperBox2__img"
              />
              <p className="swiperBox2__title">{product.title}</p>
              <p className="swiperBox2__price">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="popularBlock3__button">Весь асортимент &gt;</button>
    </div>
  );
};

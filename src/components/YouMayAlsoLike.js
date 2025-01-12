import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const YouMayAlsoLike = ({ coins }) => {
  return (
    <div className="you-may-also-like">
      <h2>You May Also Like</h2>
      <Swiper spaceBetween={20} slidesPerView="auto">
        {coins.map((coin, index) => (
          <SwiperSlide key={index}>
            <div className="coin-card">
              <img src={coin.item.small} alt={coin.item.name} />
              <p>{coin.item.name} ({coin.item.symbol.toUpperCase()})</p>
              <p>Price: ${coin.item.price_btc.toFixed(4)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default YouMayAlsoLike;

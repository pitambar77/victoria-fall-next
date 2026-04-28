import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ImageSlider = ({ images }) => {
  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img
            src={img}
            className="w-full h-[200px] object-cover rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
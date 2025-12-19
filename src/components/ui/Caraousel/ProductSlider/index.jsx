"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProductSlider = ({
  children,
  spaceBetween = 37,
  slidesPerView = 4,
  loop = true,
}) => {
 
  const slides = Array.isArray(children) ? children : [children];

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={loop}
      className="product_slider_swipper"
    >
      {slides.map((child, i) => (
        <SwiperSlide key={i}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;

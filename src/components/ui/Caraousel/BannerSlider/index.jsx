
"use client";

import { Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const BannerSlider = ({
  children,
  spaceBetween = 0,
  slidesPerView = 1,
  loop = true,
}) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={loop}
      pagination={{ clickable: true }}
      className="banner_slider_swipper"
    >
      {children}
    </Swiper>
  );
};

export default BannerSlider;

"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CaraousalNavigation from "../CaraousalNavigation";

const CategorySlider = ({
  data,
  slidesPerView = 6,
  slidesPerGroup = 6,
  spaceBetween = 24,
  sliderClass = "max-w-52 w-full h-[400px]",
  Component,
  componentProps = {},
  ...swiperProps
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef) {
      swiperRef.current?.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef) {
      swiperRef.current?.slideNext();
    }
  };

  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation]}
        // slidesPerView={slidesPerView}
        // slidesPerGroup={slidesPerGroup}
        spaceBetween={spaceBetween}
        loop
        speed={600}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="category_navigation_slider_wrapper"
        breakpoints={{
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1280: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
        }}
        {...swiperProps}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className={sliderClass}>
            <Component {...componentProps} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <CaraousalNavigation
        prevRef={prevRef}
        nextRef={nextRef}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
        buttonStyle={"min-h-7 h-7 min-w-7 !w-7"}
      />
    </div>
  );
};

export default CategorySlider;

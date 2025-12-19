"use client";

import { SwiperSlide } from "swiper/react";
import BannerSlider from ".";
import RightHeroSection from "@/components/shared/HeroSection/HomePageHero/RightHeroSection";

const HomeRightHeroSlider = () => {
  const heroSlides = [
    {
      background: "/images/background_images/home_right_hero_bg.png",
    },
    {
      background: "/images/background_images/home_right_hero_bg.png",
    },
  ];

  return (
    <BannerSlider className="w-full">
      {heroSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <RightHeroSection {...slide} />
        </SwiperSlide>
      ))}
    </BannerSlider>
  );
};

export default HomeRightHeroSlider;

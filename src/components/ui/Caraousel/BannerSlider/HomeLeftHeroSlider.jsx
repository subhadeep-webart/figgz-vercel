"use client";

import { SwiperSlide } from "swiper/react";
import BannerSlider from ".";
import LeftHeroSection from "@/components/shared/HeroSection/HomePageHero/LeftHeroSection";

const HomeLeftHeroSlider = () => {

   const heroSlides = [
    {
      title: "Global",
      highlight: "Marketplace",
      subtitle: "Connect with sellers from over",
      countries: 150,
      background: "/images/background_images/home_left_hero_bg.png",
    },
    {
      title: "Discover",
      highlight: "New Deals",
      subtitle: "Exclusive offers available in",
      countries: 80,
      background: "/images/background_images/home_left_hero_bg.png",
    }
  ];


  return (
       <BannerSlider className="w-full">
 
      {heroSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          <LeftHeroSection {...slide} />
        </SwiperSlide>
      ))}
    </BannerSlider>
  );
};

export default HomeLeftHeroSlider;

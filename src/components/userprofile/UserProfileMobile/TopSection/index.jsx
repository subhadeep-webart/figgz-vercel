"use client";

import UserSidebarMenu from "../../UserProfileSidebar/UserSidebarMenu";
import { USER_SIDEBAR_MENU } from "@/constants";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TopSectionMenu from "./TopSectionMenu";

const TopSection = () => {
  return (
    <div className="md:hidden !mb-7">
      <Swiper
        spaceBetween={12}
        slidesPerView="2"
        freeMode
        className=""
      >
        {USER_SIDEBAR_MENU.map((menuItem, index) => (
          <SwiperSlide key={`menu_item_${index}`} className="!w-auto">
            <TopSectionMenu menuItem={menuItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSection;

"use client";

import TopSectionMenu from "@/components/userprofile/UserProfileMobile/TopSection/TopSectionMenu";
import { VENDOR_SIDEBAR_MENU } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const VendorDashboardMobileTab = () => {
  return (
    <div className="md:hidden !mb-7">
      <Swiper spaceBetween={12} slidesPerView="2" className="">
        {VENDOR_SIDEBAR_MENU.map((menuItem, index) => (
          <SwiperSlide key={`menu_item_${index}`} className="!w-auto">
            <TopSectionMenu menuItem={menuItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VendorDashboardMobileTab;

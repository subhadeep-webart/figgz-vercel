"use client";
import { PUBLIC_IMAGES } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";

const SellerBannerContent = ({ title, highlight, subtitle, countries }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-16 items-center md:!mb-10 !px-5 !pt-5 md:!pt-0 md:!px-0">
      <img
        src={PUBLIC_IMAGES.SellerBannerLadyImg}
        className="md:max-w-[487] max-w-[274px] w-full md:max-h-[400px] max-h-[240px] h-full !mr-8 md:!mr-0"
      />
      <div className="flex flex-col max-w-[430px] w-full md:!mr-24 gap-4 text-center ">
        <h1 className="text-white font-bold text-xl md:text-5xl ">
          {title} <span className="text-secondary">{highlight}</span>
        </h1>

        <div className="">
          <h2 className="font-semibold text-sm md:text-base text-white">{subtitle}</h2>
          <h3 className="font-bold text-sm md:text-2xl text-secondary">
            {countries} <span className="text-white">countries</span>
          </h3>
        </div>

        <CustomButton className="w-1/3 bg-banner-btn rounded-3xl text-white text-xs h-10 hidden md:block">
          Shop now
        </CustomButton>
      </div>
    </div>
  );
};

export default SellerBannerContent;

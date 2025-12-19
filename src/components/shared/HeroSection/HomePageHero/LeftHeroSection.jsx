
"use client";

import CustomButton from "@/components/ui/Buttons/CustomButton";

const LeftHeroSection = ({
  title,
  highlight,
  subtitle,
  countries,
  background,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-cover bg-center h-[340px] max-w-[870px] w-full rounded-3xl flex justify-end !py-14"
    >
      <div className="flex flex-col gap-2 max-w-72 w-full h-52 !mr-24">
        <h1 className="text-white font-bold text-4xl">
          {title} <span className="text-secondary">{highlight}</span>
        </h1>

        <div>
          <h2 className="font-semibold text-sm text-white">{subtitle}</h2>
          <h3 className="font-bold text-2xl text-secondary">
            {countries} <span className="text-white">countries</span>
          </h3>
        </div>

        <CustomButton className="w-1/3 bg-banner-btn rounded-3xl text-white text-xs h-9">
          Shop now
        </CustomButton>
      </div>
    </div>
  );
};

export default LeftHeroSection;

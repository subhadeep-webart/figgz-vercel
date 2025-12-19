"use client";
import { PUBLIC_IMAGES } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import Image from "next/image";

const StartShopping = () => {
  return (
    <div className="grid grid-cols-2 gap-9">
      <div className="w-full h-[310px] relative">
        <Image
          src={PUBLIC_IMAGES.StartShopping}
          alt="Start Shopping"
          fill
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-10 items-start justify-end">
        <h3 className="font-medium text-base text-text-payment-info">
          Founded in 2001, our mission has been simple: to bring high-quality,
          affordable, and trend-forward products to customers worldwide, all
          from the comfort of their own homes. Whether you&apos;re looking for
          the latest fashion, home essentials, electronics, or unique gifts,
          we&apos;ve got you covered.
        </h3>
        <CustomButton className="font-semibold text-base !px-20 !py-5 w-2/3 h-[60px]">
          Start Shopping
        </CustomButton>
      </div>
    </div>
  );
};

export default StartShopping;

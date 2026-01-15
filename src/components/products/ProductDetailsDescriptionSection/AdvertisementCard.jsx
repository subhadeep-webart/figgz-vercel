"use client";
import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const AdvertisementCard = () => {
  return (
    <div className="w-1/4 h-[430px] relative hidden lg:block">
      <Image
        src={PUBLIC_IMAGES.Advertisement}
        alt="Advertisement"
        fill
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default AdvertisementCard;

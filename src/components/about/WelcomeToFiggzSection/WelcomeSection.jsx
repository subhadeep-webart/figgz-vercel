"use client";
import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const WelcomeSection = () => {
  return (
    <div>
      <div className="!mb-2">
        <h2 className="font-bold text-lg md:text-4xl text-foreground">
          Welcome to Figgz{" "}
        </h2>
        <h2 className="font-bold text-lg md:text-4xl text-foreground">
          Where Quality Meets Convenience!
        </h2>
      </div>
      <h4 className="font-medium text-xs md:text-base text-text-payment-info !mb-6">
        {" "}
        we’re more than just an online store – we’re a community of passionate
        shoppers, creators, and dreamers who believe in the power of great
        products to transform everyday life.
      </h4>
      <div className="w-full h-[280px] relative">
        <Image
          src={PUBLIC_IMAGES.Welcome}
          alt="Welcome"
          fill
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default WelcomeSection;

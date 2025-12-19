"use client";
import { COLOR_BG } from "@/constants";
import { useState } from "react";

const SellerProfileEverydayCard = ({
  name,
  title1,
  title2,
  description,
  image,
}) => {
  const [bgColor] = useState(
    () => COLOR_BG[Math.floor(Math.random() * COLOR_BG.length)]
  );
  return (
    <div>
      <div
        className="max-w-[417px] w-full maax-h-[223px] rounded-xl"
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex">
          <div className="!p-8 flex flex-col gap-1">
            <div className="w-[77px] h-[40px] border border-dashed border-border-seller-dashed flex items-center justify-center border-box ">
              <span className="font-medium text-sm text-text-everyday">
                {name}
              </span>
            </div>
            <h3 className="font-bold text-xl text-foreground">{title1}</h3>
            <span className="font-bold text-xl text-foreground"> {title2}</span>
            <p className="font-normal text-sm text-product-text-info">
              {description}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src={image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfileEverydayCard;

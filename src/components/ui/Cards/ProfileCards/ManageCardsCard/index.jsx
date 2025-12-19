"use client";

import CustomChip from "@/components/ui/CustomChip";
import { cn } from "@heroui/react";
import Image from "next/image";

const ManageCardsCard = ({logo,cardNumber,buttonClassName,buttonLabel}) => {
  return (
    <div className="border border-faded rounded-2xl !mb-8">
      <div className="flex justify-between items-center !px-9 !py-6">
        <div className="flex items-center gap-1.5">
        <div className="w-[151px] h-[54px] relative">
          <Image
            src={logo}
            alt="Profile"
            fill
            className="w-full h-full object-contain"
          />
        </div>
        {cardNumber && 
        <span className="font-medium text-product-text-base text-[22px]">{cardNumber}</span>
}
        </div>
        <CustomChip
          className={cn(
            "h-[47px] font-medium text-sm rounded-full border-1",
            buttonClassName
          )}
          variant="bordered"
        >
          {buttonLabel}
        </CustomChip>
      </div>
    </div>
  );
};

export default ManageCardsCard;

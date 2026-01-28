"use client";

import CustomChip from "@/components/ui/CustomChip";
import { cn } from "@heroui/react";
import Image from "next/image";

const ManageCardsCard = ({logo,cardNumber,buttonClassName,buttonLabel}) => {
  return (
    <div className="border border-faded rounded-2xl !mb-8">
      <div className="flex justify-between items-center md:!px-9 !px-4 !py-6">
        <div className="flex items-center gap-1.5">
        <div className="md:w-[151px] md:h-[54px] w-[86px] h-[23px] relative">
          <Image
            src={logo}
            alt="Profile"
            fill
            className="w-full h-full object-contain"
          />
        </div>
        {cardNumber && 
        <span className="font-medium text-product-text-base text-xs md:text-[22px]">{cardNumber}</span>
}
        </div>
        <CustomChip
          className={cn(
            "h-[35px] md:h-[47px] font-medium text-xs md:text-sm rounded-full border-1 !px-3 md:!px-8",
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

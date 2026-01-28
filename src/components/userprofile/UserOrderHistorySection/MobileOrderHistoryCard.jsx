"use client";
import { Icons } from "@/assets";
import SingleImageCard from "@/components/ui/Cards/SingleImageCard";
import CustomChip from "@/components/ui/CustomChip";

const MobileOrderHistoryCard = () => {
  return (
    <div className="rounded-2xl border border-secondary bg-white !p-4 !space-y-4">
      <div className="flex gap-4 bg-shopping-cart !p-1 rounded-2xl">
        <SingleImageCard
          className="h-16 w-20 bg-white flex-shrink-0"
          imageWrapperClass="h-16 w-16"
          imageClass="h-16 w-16"
        />

        <div className="flex-1">
          <p className="font-medium text-sm text-product-text-base">
            Adidas Terrex AX4 Mid
          </p>

          <p className="text-xs text-product-text-info">
            Vorem ipsum dolor sit amet.
          </p>

          <span className="font-semibold text-base mt-1 block">$20.00</span>
        </div>
      </div>

      <div className="!space-y-2 text-sm text-product-text-info">
        <p>
          <span className="font-normal text-product-text-base">Order ID: </span>{" "}
          25477888
        </p>

        <p className="flex items-center gap-2">
          <span className="font-normal text-product-text-base">
            Payment method:
          </span>
          <Icons.CardIcon size={16} />
          Credit Card
        </p>

        <p>
          <span className="font-normal text-product-text-base">
            Transaction ID:
          </span>{" "}
          87525TFED85
        </p>

        <p>
          <span className="font-normal text-product-text-base">
            Estimated Delivery:
          </span>{" "}
          24 April 2025
        </p>
      </div>

      <div className="flex justify-between items-center">
        <CustomChip
          className="h-8 border border-border-on-the-way text-border-on-the-way !px-2"
          variant="bordered"
        >
          <div className="flex items-center gap-1">
            <Icons.DeliveryParcelIcon size={18} color="#EC9C00" />
            <span>On The Way</span>
          </div>
        </CustomChip>

        <Icons.Ellipsis size={20} />
      </div>
    </div>
  );
};

export default MobileOrderHistoryCard;

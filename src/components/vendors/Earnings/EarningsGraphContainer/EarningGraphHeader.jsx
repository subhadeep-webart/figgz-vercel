"use client";
import { Icons } from "@/assets";
import { Input } from "@heroui/react";

const EarningGraphHeader = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <h3 className="font-semibold text-xl text-avatar-heading">Earnings</h3>
        <div>
          <h3 className="font-semibold text-sm text-dark-gray">
            Total Earnings this Year
          </h3>
          <span className="font-bold text-xl text-[#000000] flex gap-1 items-center">
            $20,659{" "}
            <span className="w-14 h-5 font-semibold text-[11px] text-vendor-base bg-lime-green flex justify-center items-center rounded-sm">
              <Icons.ArrowUp size={10} /> 12%
            </span>
            <span className="font-normal text-sm text-invoice-date">
              vs last years
            </span>
          </span>
        </div>
        <div>
          <h3 className="font-semibold text-sm text-dark-gray">
            Total Earnings this Year
          </h3>
          <span className="font-bold text-xl text-[#000000]">$16,659</span>
        </div>
        <div className="flex gap-1">
          <div className="bg-teal w-4 h-4 rounded-md"></div>
          <h4 className="font-normal text-sm text-invoice-date">
            Expected Earning
          </h4>
        </div>
        <div className="flex gap-1">
          <div className="bg-top-product-chip w-4 h-4 rounded-md"></div>
          <h4 className="font-normal text-sm text-invoice-date">
            Actual Earning
          </h4>
        </div>
      </div>
      <div className="border-product-search border-1 rounded-sm max-w-[122px] w-full !ml-8">
        <Input
          classNames={{
            inputWrapper:
              "bg-transparent hover:!bg-transparent shadow-none group-data-[focus=true]:bg-transparent",
            innerWrapper: "!px-4",
          }}
          endContent={
            <Icons.ChevronDown className="text-black !px-2" size={40} />
          }
          placeholder="Yearly"
        />
      </div>
    </div>
  );
};

export default EarningGraphHeader;

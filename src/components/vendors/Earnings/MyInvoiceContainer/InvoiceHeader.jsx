"use client";
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { Input } from "@heroui/react";

const InvoiceHeader = () => {
  return (
    <div className="flex gap-3 justify-between items-center w-full">
      <div className="flex gap-2">
         <CustomButton
          className="bg-transparent text-vendor-warning border border-vendor-warning text-xs font-normal w-24 !py-2.5"
        
        >
          Earnings
        </CustomButton>
         <CustomButton
          className="bg-very-light-gray text-secondary text-xs font-normal w-28 !py-2.5"
        
        >
         Withdraw
        </CustomButton>
      </div>
      <div className="flex gap-4">
        <div className="border-product-search border-1 rounded-4xl max-w-[122px] w-full">
          <Input
            classNames={{
              inputWrapper:
                "bg-transparent hover:!bg-transparent shadow-none group-data-[focus=true]:bg-transparent",
              innerWrapper: "!px-4",
            }}
            endContent={<Icons.Search className="text-black !px-2" size={40} />}
            placeholder="Search"
          />
        </div>
        <div className="border-product-search border-1 rounded-4xl max-w-[122px] w-full">
          <Input
            classNames={{
              inputWrapper:
                "bg-transparent hover:!bg-transparent shadow-none group-data-[focus=true]:bg-transparent",
              innerWrapper: "!px-4",
            }}
            endContent={
              <Icons.ChevronDown className="text-black !px-2" size={40} />
            }
            placeholder="Status"
          />
        </div>
         <div className="border-product-search border-1 rounded-4xl max-w-[239px] w-full">
          <Input
            classNames={{
              inputWrapper:
                "bg-transparent hover:!bg-transparent shadow-none group-data-[focus=true]:bg-transparent",
              innerWrapper: "!px-4",
            }}
            endContent={
              <Icons.CalendarCheck className="text-black !px-2" size={40} />
            }
            placeholder="07/10/2025 - 07/16/2025"
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceHeader;

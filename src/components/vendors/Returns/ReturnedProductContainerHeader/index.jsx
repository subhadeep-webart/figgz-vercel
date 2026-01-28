"use client";
import { Icons } from "@/assets";
import VendorCardHeaderWrapper from "@/components/shared/Wrapper/VendorCardHeaderWrapper";
import { Input } from "@heroui/react";

const ReturnedProductContainerHeader = () => {
  return (
    <VendorCardHeaderWrapper
      headerText="Returned Products"
      className="border-l-3 border-border-vendor-card-header !mb-4 !pl-3"
    >
      <div className="md:flex gap-3 justify-end items-center max-w-[432px] w-full hidden">
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
      </div>
    </VendorCardHeaderWrapper>
  );
};

export default ReturnedProductContainerHeader;

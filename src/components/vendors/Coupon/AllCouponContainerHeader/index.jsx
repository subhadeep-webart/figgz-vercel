"use client";
import { Icons } from "@/assets";
import VendorCardHeaderWrapper from "@/components/shared/Wrapper/VendorCardHeaderWrapper";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { Input } from "@heroui/react";
import { useRouter } from "next/navigation";

const AllCouponContainerHeader = () => {
  const router = useRouter();
  const handleNewCoupon = () => {
    router.push("/vendor/add-coupon/general");
  };

  return (
    <VendorCardHeaderWrapper
      headerText="All Coupon"
      className="border-l-3 border-border-vendor-card-header !mb-4  !pl-3"
    >
      <div className="flex flex-col md:flex-row gap-3 justify-end items-center w-full">
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
        <div className="border-product-search border-1 rounded-4xl md:max-w-[209px] max-w-[122px] w-full">
          <Input
            classNames={{
              inputWrapper:
                "bg-transparent hover:!bg-transparent shadow-none group-data-[focus=true]:bg-transparent",
              innerWrapper: "!px-4",
            }}
            endContent={
              <Icons.ChevronDown className="text-black !px-2" size={40} />
            }
            placeholder="Type"
          />
        </div>
        <CustomButton
          className="bg-primary text-raisin text-sm font-normal md:w-36 w-28 !py-2.5"
          clickHandler={handleNewCoupon}
        >
          Add Coupon
        </CustomButton>
      </div>
    </VendorCardHeaderWrapper>
  );
};

export default AllCouponContainerHeader;

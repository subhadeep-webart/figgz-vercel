import { Divider } from "@heroui/react";
import Product from "./Product";
import Review from "./Review";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { Icons } from "@/assets";

const {
  default: VendorDashboardTableWrapper,
} = require("@/components/shared/Wrapper/VendorDashboardTableWrapper");

const AllReviewsContainer = () => {
  return (
    <VendorDashboardTableWrapper>
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-2 ">
          <Product />
          <Review />
        </div>
        <Divider className="bg-transparent border-solid border-vendor-table-divider" />
         <div className="grid grid-cols-2 ">
          <Product />
          <Review />
        </div>
        <Divider className="bg-transparent border-solid border-vendor-table-divider" />
         <div className="grid grid-cols-2 ">
          <Product />
          <Review />
        </div>
        <Divider className="bg-transparent border-solid border-vendor-table-divider" />
         <div className="grid grid-cols-2 ">
          <Product />
          <Review />
        </div>
        <div className="flex justify-center">
         <CustomButton
          className="bg-primary text-raisin text-sm font-medium w-44 !py-2.5"
        >
         View more <Icons.ArrowDown size={18}/>
        </CustomButton>
        </div>
      </div>
    </VendorDashboardTableWrapper>
  );
};

export default AllReviewsContainer;

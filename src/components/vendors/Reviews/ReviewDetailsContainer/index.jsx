import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import Product from "../AllReviewsContainer/Product";
import Review from "../AllReviewsContainer/Review";
import { Divider } from "@heroui/react";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { Icons } from "@/assets";

const ReviewDetailsContainer = () => {
  return (
    <VendorDashboardTableWrapper>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <Product />
          <Icons.CircleChevronRight size={28} />
        </div>
        <div className="grid grid-cols-2 gap-28">
          <Review />
          <Review />
        </div>
        <Divider className="bg-transparent border-solid border-vendor-table-divider" />
        <div className="grid grid-cols-2  gap-28">
          <Review />
          <Review />
        </div>
        <Divider className="bg-transparent border-solid border-vendor-table-divider" />
        <div className="grid grid-cols-2  gap-28">
          <Review />
          <Review />
        </div>
        <Divider className="bg-transparent border-solid border-vendor-table-divider" />
        <div className="grid grid-cols-2  gap-28">
          <Review />
          <Review />
        </div>

        <div className="flex justify-center">
          <CustomButton className="bg-primary text-raisin text-sm font-medium w-44 !py-2.5">
            View more <Icons.ArrowDown size={18} />
          </CustomButton>
        </div>
      </div>
    </VendorDashboardTableWrapper>
  );
};

export default ReviewDetailsContainer;

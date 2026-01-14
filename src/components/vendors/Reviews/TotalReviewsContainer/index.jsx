"use client";
import { Divider, Input } from "@heroui/react";
import TotalReview from "./TotalReview";
import ReviewRatings from "./ReviewRatings";
import Ratings from "./Ratings";
import { Icons } from "@/assets";
import SelectField from "@/components/ui/Select/SelectField";

const {
  default: VendorDashboardTableWrapper,
} = require("@/components/shared/Wrapper/VendorDashboardTableWrapper");

const TotalReviewsContainer = () => {
  return (
    <VendorDashboardTableWrapper>
      <div className="flex justify-between">
        <div className="flex items-center justify-center gap-6">
          <TotalReview />
          <Divider orientation="vertical" className="h-[71px]" />
          <ReviewRatings />
          <Divider orientation="vertical" className="h-[71px]" />
          <div className="flex flex-col gap-1">
            <Ratings />
            <Ratings
              rating={4}
              reviews="1.0K"
              dividerWidth="w-16"
              className="justify-start"
            />
            <Ratings
              rating={3}
              reviews="500"
              dividerWidth="w-14"
              className="justify-start"
            />
            <Ratings
              rating={2}
              reviews="200"
              dividerWidth="w-10"
              className="justify-start"
            />
            <Ratings
              rating={1}
              reviews="0"
              dividerWidth="w-5"
              className="justify-start"
            />
          </div>
        </div>
        <div className="itmes-start">
          <div className="border-product-search border-1 rounded-sm max-w-[122px] w-full">
            <div>
              <SelectField
                options={[
                  { label: "Yearly", value: "yearly" },
                  { label: "Monthly", value: "monthly" },
                ]}
                defaultSelectedKeys={["yearly"]}
                classNames={{
                  base:["min-w-[100px]"],
                  trigger:["!px-2"],
                  value:["text-sidebar-lucide text-xs"]
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </VendorDashboardTableWrapper>
  );
};
export default TotalReviewsContainer;

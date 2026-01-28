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
    <VendorDashboardTableWrapper >
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center justify-start gap-6">
          <TotalReview />
          <Divider orientation="vertical" className="h-[71px] hidden md:block" />
          <ReviewRatings />
          <Divider orientation="vertical" className="h-[71px] hidden md:block" />
          <div className="flex flex-col gap-1">
            <Ratings  className="justify-start md:justify-center"/>
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
        <div className="itmes-start hidden md:block">
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

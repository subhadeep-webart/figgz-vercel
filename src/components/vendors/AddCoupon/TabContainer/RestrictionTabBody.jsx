"use client";

import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import InputField from "@/components/ui/InputField";
import { Radio, RadioGroup } from "@heroui/react";

const RestrictionTabBody = () => {
  return (
    <VendorDashboardTableWrapper>
      <form>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-6">
            <InputField
              label="Minimum spend"
              placeholder="Choose a Status"
              type="text"
            />
            <InputField
              label="Maximum spend"
              placeholder="Enter Amount"
              type="text"
            />
            <InputField
              label="Coupon expiry date"
              placeholder="Choose a Status"
              type="text"
            />
          </div>

          <RadioGroup
            label="Individual use only"
            orientation="horizontal"
            classNames={{
              base: "flex items-start gap-4",
              label: "text-black font-semibold text-sm",
            }}
          >
            <Radio
              classNames={{
                base: "flex gap-3 items-start",
                label: "text-black font-medium text-sm md:text-base",
                description: "text-text-forgot-pass text-sm md:text-base font-normal",
              }}
              description="Check this box if the coupon cannot be used in conjunction with other coupons."
            />
          </RadioGroup>

          <RadioGroup
            label="Exclude sale items"
            orientation="horizontal"
            classNames={{
              base: "flex items-start gap-4",
              label: "text-black font-semibold text-sm",
            }}
          >
            <Radio
              classNames={{
                base: "flex gap-3 items-start",
                label: "text-black font-medium text-sm md:text-base",
                description: "text-text-forgot-pass text-sm md:text-base font-normal",
              }}
              description="Check this box if the coupon should not apply to items on sale. Per-item coupons will only work if the item is not on sale. Per-cart coupons will only work if there are items in the cart that are not on sale."
            />
          </RadioGroup>
        </div>
      </form>
    </VendorDashboardTableWrapper>
  );
};

export default RestrictionTabBody;

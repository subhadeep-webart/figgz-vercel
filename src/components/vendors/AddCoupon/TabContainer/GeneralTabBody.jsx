"use client";

import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import InputField from "@/components/ui/InputField";
import { Radio, RadioGroup } from "@heroui/react";

const GeneralTabBody = () => {
  return (
    <VendorDashboardTableWrapper>
      <form>
        <div className="flex flex-col gap-4">
          <div className="flex gap-6">
            <InputField
              label="Discount type"
              placeholder="Choose a Status"
              type="text"
            />
            <InputField
              label="Coupon amount"
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
            label="Allow free shipping"
            orientation="horizontal"
            classNames={{
              base: "flex items-start gap-4",
              label: "text-black font-semibold text-sm",
            }}
          >
            <Radio
              classNames={{
                base: "flex gap-3 items-start",
                label: "text-black font-medium text-base",
                description: "text-text-forgot-pass text-base font-normal",
              }}
              description="Check this box if the coupon grants free shipping. A free shipping method must be enabled in your shipping zone and be set to require a valid free shipping coupon (see the 'Free Shipping Requires' setting)."
            />
          </RadioGroup>
        </div>
      </form>
    </VendorDashboardTableWrapper>
  );
};

export default GeneralTabBody;

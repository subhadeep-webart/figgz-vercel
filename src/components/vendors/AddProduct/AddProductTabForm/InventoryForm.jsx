"use client";
import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import InputField from "@/components/ui/InputField";
import SelectField from "@/components/ui/Select/SelectField";
import { Radio, RadioGroup } from "@heroui/react";

const InventoryForm = () => {
  return (
    <VendorDashboardTableWrapper>
      <h3 className="font-semibold text-sm md:text-lg text-avatar-heading !mb-4">Inventory</h3>
      <form>
        <div className="flex flex-col gap-4">
       
          <div className="flex flex-col md:flex-row gap-6">
            <InputField label="SKU" placeholder="Enter Name" type="text" />
            <InputField
              label="GTIN, UPC, EAN, or ISBN"
              placeholder="Enter Name"
              type="text"
            />
          </div>

          <div>
            <label className="font-semibold text-sm text-[#000000]">
              Stock status
            </label>
            <SelectField
              placeholder="Choose a Status"
              options={[
                { label: "Status1", value: "status1" },
                { label: "Status2", value: "status2" },
              ]}
            />
          </div>

          <RadioGroup
            label="Sold individually"
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
              description="Limit purchases to 1 item per order"
            />
          </RadioGroup>
        </div>
      </form>
    </VendorDashboardTableWrapper>
  );
};

export default InventoryForm;

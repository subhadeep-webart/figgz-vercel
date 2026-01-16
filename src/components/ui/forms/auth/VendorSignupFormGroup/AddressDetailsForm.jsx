"use client";

import Link from "next/link";
import styles from "../authform.module.css";
import { Icons } from "@/assets";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import InputField from "@/components/ui/InputField";
import MobileInput from "@/components/ui/InputField/MobileInput";
import { CircularProgress } from "@heroui/react";
import SelectField from "@/components/ui/Select/SelectField";

const AddressDetailsForm = () => {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/vendor-signup/upload-document");
  };

  const handlePrevious = () => {
    router.push("/vendor-signup/business-details");
  };
  return (
    <>
      <div className={styles.signup_form_container}>
        <h1 className="text-foreground font-bold text-sm md:text-2xl flex items-center md:items-start">
          Let’s Get Your Store Online!
        </h1>
        <div className="flex gap-2 justify-between items-center w-full">
          <div className="w-full flex justify-start items-center gap-2">
            <CircularProgress
              showValueLabel={true}
              size="lg"
              valueLabel={`3 of 6`}
              value={(3 / 6) * 100}
              classNames={{
                svg: "rotate-180",
                indicator: "stroke-[#FEA800]",
              }}
            />
            <p className="text-raisin font-semibold text-base">
              Address Details
            </p>
          </div>
          <div className="flex gap-1 items-center w-fit">
            <Icons.GpsLocationIcon size={27} />
            <p className="font-medium text-sm underline underline-secondary text-nowrap text-secondary">
              GPS Location
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="grid grid-cols-12 gap-4 w-full">
            <div className="w-full col-span-6">
              <InputField
                label="Business Address Line 1"
                placeholder="Enter Address"
                type="text"
              />
            </div>
            <div className="w-full col-span-6">
              <InputField
                label="Business Address Line 2"
                placeholder="Enter Address"
                type="text"
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-12 gap-4">
            <div className="w-full col-span-4">
              <InputField
                label="City"
                placeholder="Enter City Name"
                type="text"
              />
            </div>
            <div className="col-span-4 w-full">
              <InputField
                label="State / Province"
                placeholder="Enter State Name"
                type="text"
              />
            </div>
            <div className="col-span-4 w-full">
              <InputField
                label="Country"
                placeholder="Enter Country Name"
                type="text"
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-12 gap-4">
            <div className="w-full col-span-4">
              <InputField
                label="Postal / ZIP Code"
                placeholder="Enter Code"
                type="text"
              />
            </div>
            <div className="col-span-4 w-full">
              <InputField
                label="Business Phone Number"
                placeholder="Enter mobile number"
                type="text"
              />
            </div>
            <div className="col-span-4 w-full">
              <InputField
                label="Alternate Phone Number"
                placeholder="Enter mobile number"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex gap-4">
          <CustomButton
            className="bg-transparent text-secondary font-semibold text-[10px] lg:text-sm border-secondary border-1 !px-2 lg:!px-4 w-48"
            variant="bordered"
            clickHandler={handlePrevious}
          >
            Previous
          </CustomButton>
          <CustomButton
            className="bg-primary w-48 text-raisin font-semibold text-xs md:text-sm py-4"
            clickHandler={handleRegister}
          >
            Save & Next
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default AddressDetailsForm;

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

const BusinessDetailsForm = () => {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/vendor-signup/address-details");
  };

  const handlePrevious = () => {
    router.push("/vendor-signup");
  };
  return (
    <>
      <div className={styles.vendor_form_container}>
        <h1 className="text-foreground font-bold text-sm md:text-2xl flex items-start">
          Let’s Get Your Store Online!
        </h1>
        <div className="flex gap-2 justify-start items-center">
          <CircularProgress
            showValueLabel={true}
            size="lg"
            valueLabel={`2 of 6`}
            value={(2 / 6) * 100}
            classNames={{
              svg: "rotate-180",
              indicator: "stroke-[#FEA800]",
            }}
          />
          <span className="text-raisin font-semibold text-sm md:text-base">
            Business Details
          </span>
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
            <div className="w-full col-span-6">
              <InputField
                label="Business / Store Name"
                placeholder="Enter name"
                type="text"
                classNames={{
                    label:["!mb-1"]
                }}
              />
            </div>
            <div className="w-full col-span-6">
   
                <label className="font-semibold text-sm text-[#000000]">
                  Stock status
                </label>
                <SelectField
                  placeholder="Choose a Status"
                  options={[
                    { label: "Status1", value: "status1" },
                    { label: "Status2", value: "status2" },
                  ]}
                  classNames={{
                    value:["text-text-forgot-pass text-sm"]
                  }}
                />
              </div>
        
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="w-full col-span-4">
              <InputField
                label="EIN / Tax Number"
                placeholder="Enter number"
                type="text"
              />
            </div>
            <div className="col-span-4 w-full">
              <InputField
                label="Tax ID"
                placeholder="Enter number"
                type="text"
              />
            </div>
            <div className="col-span-4 w-full">
              <InputField
                label="License Number"
                placeholder="Enter number"
                type="text"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 w-full">
            <InputField
              label="Business Description"
              placeholder="Enter Something About The Business"
              type="text"
            />
          </div>
        </div>
        <div className="w-full flex gap-4">
          <CustomButton
            className="bg-transparent text-secondary font-semibold text-[10px] lg:text-sm border-secondary border-1 md:!px-4 md:w-48 w-1/2"
            variant="bordered"
            clickHandler={handlePrevious}
          >
            Previous
          </CustomButton>
          <CustomButton
            className="bg-primary md:w-1/3 w-1/2 text-raisin font-semibold text-xs md:text-sm md:!px-4"
            clickHandler={handleRegister}
          >
            Save & Next
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default BusinessDetailsForm;

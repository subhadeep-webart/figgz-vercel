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

const UploadDocumentsForm = () => {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/vendor-signup/store-details");
  };

  const handlePrevious = () => {
    router.push("/vendor-signup/address-details");
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
            valueLabel={`4 of 6`}
            value={(4 / 6) * 100}
            classNames={{
              svg: "rotate-180",
              indicator: "stroke-[#FEA800]",
            }}
          />
          <span className="text-raisin font-semibold text-sm md:text-base">
            Uploads Document
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 w-full">
          <div className="grid grid-cols-1 gap-4 w-full">
            <InputField
              label="Business License / Trade Certificate"
              placeholder="Upload Document"
              type="file"
              endContent={
                <Icons.Upload size={24} className="text-black" />
              }
            />
          </div>
        <div className="grid grid-cols-1 gap-4 w-full">
            <InputField
              label="EIN Certificate"
              placeholder="Upload Document"
              type="file"
              endContent={
                <Icons.Upload size={24} className="text-black" />
              }
            />
          </div>
        <div className="grid grid-cols-1 gap-4 w-full">
            <InputField
              label="Government-issued ID"
              placeholder="Upload Document"
              type="file"
              endContent={
                <Icons.Upload size={24} className="text-black" />
              }
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
            className="bg-primary md:w-48 w-1/2 text-raisin font-semibold text-xs md:text-sm md:!px-4"
            clickHandler={handleRegister}
          >
            Save & Next
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default UploadDocumentsForm;

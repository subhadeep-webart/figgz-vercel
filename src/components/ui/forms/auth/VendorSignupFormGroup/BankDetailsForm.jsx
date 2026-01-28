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

const BankDetailsForm = () => {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/vendor-signup/otp-verification");
  };

  const handlePrevious = () => {
    router.push("/vendor-signup/store-details");
  };
  return (
    <>
      <div className={styles.vendor_form_container}>
        <h1 className="text-foreground font-bold text-sm md:text-xl flex items-start">
          Let’s Get Your Store Online!
        </h1>
        <div className="flex gap-2 justify-start items-center">
        <CircularProgress
            showValueLabel={true}
            size="lg"
            valueLabel={`6 of 6`}
            value={(6 / 6) * 100}
            classNames={{
              svg: "rotate-180",
              indicator: "stroke-[#FEA800]",
            }}
          />
          <span className="text-raisin font-semibold text-sm md:text-base">
            Bank Details
          </span>
        </div>
        <div className="grid grid-cols-1  gap-4 w-full">
          <div className="grid grid-col-1  gap-4 w-full">
            <InputField
              label="Bank Name"
              placeholder="Enter bank name"
              type="text"
            />
          </div>
          <div className="grid grid-col-1  gap-4 w-full">
            <InputField
              label="Account Holder Name"
              placeholder="Enter account holder name"
              type="text"
            />
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-4">
            <InputField
              label="Account Number"
              placeholder="Enter account number"
              type="text"
            />
            <InputField
              label="Re-enter Account Number"
              placeholder="Enter account number"
              type="text"
            />
          </div>
          <div className="grid grid-col-1 gap-4 w-full">
            <InputField
              label="Routing Number"
              placeholder="Enter routing number"
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
            className="bg-primary md:w-48 text-raisin font-semibold text-xs md:text-sm md:!px-4 w-1/2"
            clickHandler={handleRegister}
          >
            Save & Next
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default BankDetailsForm;

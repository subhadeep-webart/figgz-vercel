"use client";

import Link from "next/link";
import styles from "../authform.module.css";
import { Icons } from "@/assets";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import InputField from "@/components/ui/InputField";
import MobileInput from "@/components/ui/InputField/MobileInput";
import { CircularProgress } from "@heroui/react";

const BasicDetailsForm = () => {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/vendor-signup/business-details");
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
            valueLabel={`1 of 6`}
            value={(1 / 6) * 100}
            classNames={{
              svg: "rotate-180",
              indicator: "stroke-[#FEA800]",
            }}
          />
          <span className="text-raisin font-semibold text-sm md:text-base">
            Basic Details
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <InputField
            label="First name"
            placeholder="Enter first name"
            type="text"
          />
          <InputField
            label="Last name"
            placeholder="Enter last name"
            type="text"
          />
          <MobileInput
            label="Mobile number"
            placeholder="Enter mobile number"
            type="text"
          />
          <InputField label="Email" placeholder="Enter email" type="email" />
          <InputField
            label="Password"
            placeholder="Enter password"
            type="password"
          />
          <InputField
            label="Confirm password"
            placeholder="Enter confirm password"
            type="password"
          />
        </div>
        <CustomButton
          className="bg-primary w-48 text-raisin font-semibold text-xs md:text-sm py-4"
          clickHandler={handleRegister}
        >
          Save & Next
        </CustomButton>
      </div>
    </>
  );
};

export default BasicDetailsForm;

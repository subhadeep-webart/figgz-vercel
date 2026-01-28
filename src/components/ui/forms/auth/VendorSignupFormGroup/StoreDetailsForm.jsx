"use client";

import Link from "next/link";
import styles from "../authform.module.css";
import { Icons } from "@/assets";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import InputField from "@/components/ui/InputField";
import MobileInput from "@/components/ui/InputField/MobileInput";
import { Checkbox, CircularProgress } from "@heroui/react";
import SelectField from "@/components/ui/Select/SelectField";

const StoreDetailsForm = () => {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/vendor-signup/bank-details");
  };

  const handlePrevious = () => {
    router.push("/vendor-signup/upload-document");
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
            valueLabel={`5 of 6`}
            value={(5 / 6) * 100}
            classNames={{
              svg: "rotate-180",
              indicator: "stroke-[#FEA800]",
            }}
          />
          <span className="text-raisin font-semibold text-sm md:text-base">
            Store Details
          </span>
        </div>
        <div className="grid grid-cols-6 gap-5 w-full">
          <div className="col-span-6">
            <InputField
              label="Upload Logo"
              placeholder="Upload Logo"
              type="file"
              endContent={<Icons.ImageUp size={24} className="text-black" />}
            />
          </div>

          <div className="col-span-6 md:col-span-4">
            <InputField
              label="Return & Refund Policy"
              placeholder="Upload Logo"
              type="file"
              endContent={<Icons.Upload size={24} className="text-black" />}
            />
          </div>
          <div className="col-span-6 md:col-span-2 flex items-end">
            <Checkbox
              radius="sm"
              classNames={{
                label: ["!pl-2"],
              }}
            >
              Use Figgz Policies
            </Checkbox>
          </div>

          <div className="col-span-6 md:col-span-4">
            <InputField
              label="Shipping Policy"
              placeholder="Upload Logo"
              type="file"
              endContent={<Icons.Upload size={24} className="text-black" />}
            />
          </div>
          <div className="col-span-6 md:col-span-2 flex items-end">
            <Checkbox
              radius="sm"
              classNames={{
                label: ["!pl-2"],
              }}
            >
              Use Figgz Policies
            </Checkbox>
          </div>

        
        </div>

          <div>
            <Checkbox
              radius="sm"
              classNames={{
                label: ["!pl-2"],
              }}
            >
              Terms & Conditions Agreement
            </Checkbox>
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
            className="bg-primary md:w-48 w-1/2 text-raisin font-semibold text-xs md:text-sm !px-4"
            clickHandler={handleRegister}
          >
            Save & Next
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default StoreDetailsForm;

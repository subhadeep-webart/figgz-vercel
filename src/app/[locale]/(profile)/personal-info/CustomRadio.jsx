"use client";

import { Icons } from "@/assets";
import { Radio, RadioGroup } from "@heroui/react";

const CustomCheckbox = () => {
  return (
    <div>
      <RadioGroup label="Gender" classNames={{ label: "text-sm font-semibold text-[#000000]" }}>
        <div className="flex justify-start items-center gap-5">
          <Radio value="male" classNames={{ base: "flex-row-reverse gap-2" }}><div className="flex justify-center items-center text-base text-text-forgot-pass"><Icons.MaleIcon size={32} />Male</div></Radio>
          <Radio value="female" classNames={{ base: "flex-row-reverse gap-2" }}><div className="flex justify-center items-center text-base text-text-forgot-pass"><Icons.FemaleIcon size={42} />Female</div></Radio>
        </div>
      </RadioGroup>
    </div>
  );
};

export default CustomCheckbox;

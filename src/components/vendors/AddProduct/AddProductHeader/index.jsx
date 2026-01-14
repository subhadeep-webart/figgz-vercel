"use client";
import { Checkbox } from "@heroui/react";

const AddProductHeader = () => {
  return (
    <div className="flex justify-between !mb-7">
      <h3 className="font-semibold text-lg text-avatar-heading">
        Enter Product Details
      </h3>
      <div className="flex gap-5">
        <Checkbox
          classNames={{
            label: ["text-base font-normal text-[#000000] !ml-2"],
          }}
          radius="sm"
        >
          Simple Products
        </Checkbox>
        <Checkbox
          classNames={{
            label: ["text-base font-normal text-[#000000] !ml-2"],
          }}
          radius="sm"
        >
          Virtual
        </Checkbox>
        <Checkbox
          classNames={{
            label: ["text-base font-normal text-[#000000] !ml-2"],
          }}
          radius="sm"
        >
          Downloadable
        </Checkbox>
      </div>
    </div>
  );
};

export default AddProductHeader;

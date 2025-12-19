"use client";

import { Select, SelectItem } from "@heroui/react";

const SelectField = ({
  label = "",
  placement = "outside",
  placeholder = "",
  options = [],
}) => {
  return (
    <Select
      label={label}
      labelPlacement={placement}
      placeholder={placeholder}
      classNames={{
        base: ["gap-0"],

        label: ["font-semibold", "text-sm", "text-[#000000]",],

        trigger: [
          "bg-white",
          "hover:bg-white",
          "focus:bg-white",
          "active:bg-white",

          "data-[hover=true]:bg-white",
          "data-[focus=true]:bg-white",
          "data-[focus-visible=true]:shadow-none",
          "data-[pressed=true]:bg-white",
          "data-[open=true]:bg-white",

          "!shadow-none",

          "border-0",
          "border-b",
          "border-[#C3C3C3]",
          "rounded-none",

          "px-0",
          "h-auto",

        ],

        value: [
          "text-base",
          "font-normal",
          "text-black",
        ],

        placeholder: [
          "text-[#919191]",
          "font-normal",
          "text-[15px]",
        ],

        selectorIcon: ["text-[#222222]"],
      }}
    >
      {options.map((opt) => (
        <SelectItem key={opt.value} value={opt.value}>
          {opt.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectField;

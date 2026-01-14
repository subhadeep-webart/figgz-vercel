"use client";

import { cn, Select, SelectItem } from "@heroui/react";

const SelectField = ({
  label = "",
  placement = "outside",
  placeholder = "",
  defaultSelectedKeys,
  options = [],
  classNames = {},
}) => {
  return (
    <Select
      label={label}
      labelPlacement={placement}
      placeholder={placeholder}
      defaultSelectedKeys={defaultSelectedKeys}
      classNames={{
        base: cn("gap-0 space-y-0", classNames.base),

        label: cn("font-semibold text-sm text-black", classNames.label),

        trigger: cn(
          "bg-white hover:bg-white focus:bg-white active:bg-white",
          "data-[hover=true]:bg-white",
          "data-[focus=true]:bg-white",
          "data-[focus-visible=true]:shadow-none",
          "data-[pressed=true]:bg-white",
          "data-[open=true]:bg-white",
          "!shadow-none",
          "border-0 border-b border-[#C3C3C3] rounded-none",
          "px-0 h-auto",
          classNames.trigger
        ),

        value: cn("text-base font-normal text-black", classNames.value),

        placeholder: cn(
          "text-[#919191] font-normal text-[15px]",
          classNames.placeholder
        ),

        /* 🔽 DROPDOWN LIST STYLES */
        popoverContent: cn(
          "rounded-none shadow-md border border-gray-200",
          classNames.popoverContent
        ),

        listbox: cn("!py-1 !px-3 ", classNames.listbox),

        listboxWrapper: cn("max-h-60", classNames.listboxWrapper),

        listboxItem: cn(
          "!px-2 text-xs",
          classNames.listboxItem
        ),

        selectorIcon: cn("text-[#222222]", classNames.selectorIcon),
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

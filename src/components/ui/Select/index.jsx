"use client";

import SelectCartSelectDisplay from "@/components/shared/Select/components/SelectCartSelectDisplay";
import {
  Select,
  SelectItem,
} from "@heroui/react";



const CustomSelect = (
  {
    SIZE_CHART,
    label,
    defaultSelectedKeys,
    // defaultValue = "Newest",
    // options = ["Popular", "Most searched"],
    // onChange = () => { },
  }
) => {

  return (
   
    <Select
      items={SIZE_CHART}
      className="md:w-[184px] w-[100px]"
     defaultSelectedKeys={defaultSelectedKeys}
      classNames={{
        trigger:
          "min-h-[42px] h-[42px] bg-white shadow-none border border-image-wrapper hover:!bg-white data-[hover=true]:bg-white !px-4",
        label: "text-black font-semibold text-sm !pb-1",
        listbox: "!p-2 bg-transparent",
        option: "",
      }}
      radius="full"
      renderValue={(items) =>
        items.map((item) => (
          <SelectCartSelectDisplay
            key={item.key}
            label={label}
            text={item.data.label}
          />
        ))
      }
    >
      {(item) => (
        <SelectItem key={item.key} value={item.key} className="!p-2">
          <SelectCartSelectDisplay text={item.label} />
        </SelectItem>
      )}
    </Select>
  );
};

export default CustomSelect;

"use client";

import SelectCartSelectDisplay from "@/components/shared/Select/components/SelectCartSelectDisplay";
import {
  // Dropdown,
  // DropdownTrigger,
  // DropdownMenu,
  // DropdownItem,
  // Button,
  Select,
  SelectItem,
} from "@heroui/react";
// import { useState } from "react";



const CustomSelect = (
  {
    SIZE_CHART
    // label = "Sort by",
    // defaultValue = "Newest",
    // options = ["Popular", "Most searched"],
    // onChange = () => { },
  }
) => {
  // const [selected, setSelected] = useState(defaultValue);

  // const handleSelect = (key) => {
  //   setSelected(key);
  //   onChange(key);
  // };

  return (
    // <Dropdown>
    //   <DropdownTrigger>
    //     <Button
    //       radius="full"
    //       variant="flat"
    //       className="bg-white shadow-md border border-border-image-wrapper text-text-display-info !px-5 !py-3"
    //       endContent={<span className="text-sm">▾</span>}
    //     >
    //       <span className="font-medium">{label}: </span>
    //       <span className="ml-1 text-foreground">{selected}</span>
    //     </Button>
    //   </DropdownTrigger>

    //   <DropdownMenu
    //     aria-label="Sort options"
    //     onAction={(key) => handleSelect(key)}
    //     classNames={{
    //       base: `
    //                     rounded-[6px]
    //                     border border-[#D0CDCD]
    //                     shadow-[0_4px_4px_rgba(0,0,0,0.25)]
    //                     bg-white
    //                     !p-[12px]
    //                 `,
    //     }}
    //   >
    //     {options.map((item, index) => (
    //       <DropdownItem
    //         key={item}
    //         className={`text-sm !px-3 !py-2 ${index !== options.length - 1 ? "border-b border-border-select-item" : ""
    //           }`}
    //       >
    //         {item}
    //       </DropdownItem>
    //     ))}
    //   </DropdownMenu>
    // </Dropdown>
    <Select
      items={SIZE_CHART}
      className="w-[184px]"
      defaultSelectedKeys={["Newest"]}
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
            label="Sort by:"
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

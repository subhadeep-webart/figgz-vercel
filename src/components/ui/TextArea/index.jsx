"use client";

import { Textarea, cn } from "@heroui/react";

const TextareaField = ({
  placement = "outside-top",
  label = "",
  placeholder = "",
  classNames = {} 
}) => {
  const defaultClassNames = {
    label: [
      "font-semibold",
      "text-sm",
      "text-[#000000]",
      "mb-2",
    ],

    inputWrapper: [
      "bg-white",
      "hover:bg-white",
      "focus:bg-white",
      "active:bg-white",

      "data-[hover=true]:bg-white",
      "data-[focus=true]:bg-white",
      "data-[focus-visible=true]:shadow-none",
      "data-[pressed=true]:bg-white",

      "data-[filled=true]:bg-white",
      "data-[filled=true]:data-[hover=true]:bg-white",
      "data-[filled=true]:data-[focus=true]:bg-white",

      "!shadow-none",
      "border-0",
      "border-b",
      "border-[#C3C3C3]",
      "rounded-none",
      "px-0",
      "pb-2", 
    ],

    input: [
      "text-base",
      "font-normal",
      "placeholder:text-[#919191]",
      "placeholder:font-normal",
      "placeholder:text-[15px]",
      "min-h-[90px]",
    ],
  };

  const mergedClassNames = {
    label: cn(defaultClassNames.label, classNames.label),
    inputWrapper: cn(defaultClassNames.inputWrapper, classNames.inputWrapper),
    input: cn(defaultClassNames.input, classNames.input),
  };

  return (
    <Textarea
      label={label}
      labelPlacement={placement}
      placeholder={placeholder}
      classNames={mergedClassNames}
    />
  );
};

export default TextareaField;

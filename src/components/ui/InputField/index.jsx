"use client";

import { Icons } from "@/assets";
import { Input, cn } from "@heroui/react";
import { useState } from "react";

const InputField = ({
  placement = "outside-top",
  type = "text",
  label = "",
  placeholder = "",
  classNames = {},
  endContent,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

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
      "border-0",
      "border-b",
      "border-[#C3C3C3]",
      "rounded-none",
      "px-0",
      "!shadow-none",
    ],
    input: [
      "text-base",
      "font-normal",
      "placeholder:text-[#919191]",
      "placeholder:text-[15px]",
    ],
  };

  const mergedClassNames = {
    label: cn(defaultClassNames.label, classNames.label),
    inputWrapper: cn(defaultClassNames.inputWrapper, classNames.inputWrapper),
    input: cn(defaultClassNames.input, classNames.input),
  };

  const resolvedEndContent = isPassword ? (
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="focus:outline-none"
    >
      {showPassword ? (
        <Icons.EyeOff className="text-[#222222]" size={18} />
      ) : (
        <Icons.Eye className="text-[#222222]" size={18} />
      )}
    </button>
  ) : (
    endContent
  );

  return (
    <Input
      key={placement}
      label={label}
      labelPlacement={placement}
      type={isPassword && showPassword ? "text" : type}
      placeholder={placeholder}
      classNames={mergedClassNames}
      endContent={resolvedEndContent}
    />
  );
};

export default InputField;

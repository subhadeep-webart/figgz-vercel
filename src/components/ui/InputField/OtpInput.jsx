"use client";

import { InputOtp } from "@heroui/react";

const OtpInput = () => {
  return (
    <>
      <InputOtp
        length={6}
        variant={"underlined"}
        classNames={{
            segment:"border-b border-black"
        }}
      />
    </>
  );
};

export default OtpInput;

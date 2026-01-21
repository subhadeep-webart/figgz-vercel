"use client";
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import Link from "next/link";

const DownSection = () => {
  return (
    <div className="md:hidden text-center">
      <Link
        href="#"
        className="flex justify-center gap-1.5 font-normal text-base text-raisin !py-10"
      >
        <Icons.LogOut />
        Log Out
      </Link>
      <CustomButton className="text-base text-raisin !px-12 !py-5 border border-raisin bg-transparent">
        Explore Brand Deals
      </CustomButton>
    </div>
  );
};

export default DownSection;

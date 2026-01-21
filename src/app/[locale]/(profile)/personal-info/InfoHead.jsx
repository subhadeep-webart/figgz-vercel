import { Icons, PUBLIC_IMAGES } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import Image from "next/image";

const InfoHead = () => {
  return (
    <div className="flex justify-between items-end">
      <div className="w-[82px] h-[82px] md:w-[186px] md:h-[186px] relative">
        <Image
          src={PUBLIC_IMAGES.Avatar}
          alt="Profile"
          fill
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <CustomButton className="font-semibold text-lg !px-14 h-[57px] border border-raisin bg-white hidden md:block">
        Edit Profile Image
      </CustomButton>
      <Icons.PenLine className="md:hidden"/>
    </div>
  );
};

export default InfoHead;

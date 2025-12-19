import { PUBLIC_IMAGES } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import Image from "next/image";

const InfoHead = () => {
  return (
    <div className="flex justify-between items-end">
      <div className="w-[186px] h-[186px] relative">
        <Image
          src={PUBLIC_IMAGES.Avatar}
          alt="Profile"
          fill
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <CustomButton className="font-semibold text-lg !px-14 h-[57px] border border-raisin bg-white">
        Edit Profile Image
      </CustomButton>
    </div>
  );
};

export default InfoHead;

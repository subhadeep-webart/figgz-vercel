import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const BrandsCard=()=>{
    return(
        <div className="w-full min-h-[73px] border border-border-brands rounded-xl flex justify-center items-center  [background:linear-gradient(292.71deg,rgba(254,168,0,0.6)_-68.62%,rgba(254,168,0,0)_45%),linear-gradient(280.94deg,rgba(254,168,0,0)_57.93%,rgba(254,168,0,0.25)_103.02%)]">
  <div className="w-[85px] h-[51px] relative">
      <Image
        src={PUBLIC_IMAGES.BrandFRWD}
        alt="Brand"
        fill
        className=" object-contain"
        unoptimized
      />
    </div>
        </div>
    )
};

export default BrandsCard;
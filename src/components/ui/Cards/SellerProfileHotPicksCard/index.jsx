import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const SellerProfileHotPicksCard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[141px] md:w-[197px]">
      <div className="w-[141px] md:w-[197px] h-[141px] md:h-[197px] rounded-full flex justify-center items-center border-t border-t-primary">
        <div className="w-[110px] md:w-[159px] h-[110px] md:h-[159px] relative rounded-full">
          <Image
            src={PUBLIC_IMAGES.SellerPerson}
            alt="Color 1 image"
            fill
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <h3 className="font-medium text-sm md:text-base text-foreground">
        T-Shirts & Polos
      </h3>
    </div>
  );
};

export default SellerProfileHotPicksCard;

import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const OrderInfoBannerRight = () => {
  return (
    <div className="flex items-center justify-center">
    <div className="md:w-[580px] md:h-[393px] w-[236px] h-[169px] relative">
      <Image
        src={PUBLIC_IMAGES.OrderInfoShoe}
        alt="Profile"
        fill
        className=" object-contain"
        unoptimized
      />
    </div>
    </div>
  );
};
export default OrderInfoBannerRight;

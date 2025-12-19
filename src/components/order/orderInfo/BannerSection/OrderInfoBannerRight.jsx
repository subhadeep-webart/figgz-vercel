import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const OrderInfoBannerRight = () => {
  return (
    <div className="w-[580px] h-[393px] relative">
      <Image
        src={PUBLIC_IMAGES.OrderInfoShoe}
        alt="Profile"
        fill
        className=" object-contain"
        unoptimized
      />
    </div>
  );
};
export default OrderInfoBannerRight;

import { PUBLIC_IMAGES } from "@/assets";
import BannerComponent from "@/components/shared/Banner/BannerComponent";
import OrderInfoBannerLeft from "./OrderInfoBannerLeft";
import OrderInfoBannerRight from "./OrderInfoBannerRight";

const OrderInfoBannerSection = () => {
  return (
    <BannerComponent
      bgImage={PUBLIC_IMAGES.OrderInfoBannerBg}
      className="h-[500px]"
    >
      <div className="md:!px-14 md:!py-11">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24">
          <OrderInfoBannerLeft />
          <OrderInfoBannerRight />
        </div>
      </div>
    </BannerComponent>
  );
};

export default OrderInfoBannerSection;

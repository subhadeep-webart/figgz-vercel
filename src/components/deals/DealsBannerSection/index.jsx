import { PUBLIC_IMAGES } from "@/assets";
import BannerComponent from "@/components/shared/Banner/BannerComponent";
import DealsBannerContent from "./DealsBannerContent";

const DealsBannerSection = () => {
  return (
    <BannerComponent
      bgImage={PUBLIC_IMAGES.DealsOfferBannerBg}
      className="h-[500px] justify-end items-start !pt-14 !px-12"
    >
      <DealsBannerContent />
    </BannerComponent>
  );
};

export default DealsBannerSection;

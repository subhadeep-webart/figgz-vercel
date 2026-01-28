import { PUBLIC_IMAGES } from "@/assets";
import SellerInfo from "./SellerInfo";
import BannerComponent from "@/components/shared/Banner/BannerComponent";
import SellerBannerContent from "./SellerBannerContent";

const SellerBannerSection = () => {
  return (
    <section>
      <BannerComponent
        bgImage={PUBLIC_IMAGES.SellerBannerBg}
        className="items-center justify-end h-[396px] md:h-[509px] z-0"
      >
        <SellerBannerContent
          title="Style Starts Here"
          highlight="Your Trusted Fashion Vendor"
          subtitle="Connect with sellers from over"
          countries={150}
        />
      </BannerComponent>
      <div className="w-full flex justify-center !mt-[-80px] z-10">
        <SellerInfo />
      </div>
    </section>
  );
};

export default SellerBannerSection;

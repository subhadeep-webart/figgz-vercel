import { PUBLIC_IMAGES } from "@/assets";
import BannerSection from "@/components/shared/Banner/BannerSection";
import SellerInfo from "./SellerInfo";


const SellerBannerSection = () => {
  return (
    <section>
      <BannerSection
        bgImage={PUBLIC_IMAGES.SellerProfileBannerBg}
        showSeller={true}
        title="Style Starts Here"
        subtitle="Connect with sellers from over"
        highlight="Your Trusted Fashion Vendor"
        countries="150"
        className="items-center justify-end h-[509px] z-0"
      />
      <div className="w-full flex justify-center !mt-[-80px] z-10">
        <SellerInfo />
      </div>
    </section>
  );
};

export default SellerBannerSection;

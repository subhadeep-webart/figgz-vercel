import { PUBLIC_IMAGES } from "@/assets";
import BannerSection from "@/components/shared/Banner/BannerSection";


const DealsBannerSection = () => {
  return (
    <section>
      <BannerSection bgImage={PUBLIC_IMAGES.DealsOfferBannerBg} className="h-[500px] justify-end items-start !pt-14 !px-12" showDealsAndOfferInfo={true} />
    </section>
  )
};

export default DealsBannerSection;
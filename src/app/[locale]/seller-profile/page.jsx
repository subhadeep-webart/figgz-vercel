import BestDealsSection from "@/components/seller/BestDealsSection";
import CollectionSection from "@/components/seller/CollectionSection";
import EverydayStyleSection from "@/components/seller/EverydayStyleSection";
import HotPicksSection from "@/components/seller/HotPicksSection";
import MoreProductSection from "@/components/seller/MoreProductSection";
import SellerBannerSection from "@/components/seller/SellerBannerSection";

const SellerProfile = () => {
  return (
    <section className="container flex flex-col gap-16">
      <SellerBannerSection />
      <HotPicksSection />
      <EverydayStyleSection />
      <CollectionSection />
      <BestDealsSection />
      <MoreProductSection />
    </section>
  );
};

export default SellerProfile;

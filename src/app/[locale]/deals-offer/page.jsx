import DealsBannerSection from "@/components/deals/DealsBannerSection";
import DealsFromBrandSection from "@/components/deals/DealsFromBrandSection";
import DealsNewArrivalSection from "@/components/deals/DealsNewArrivalSection";
import ProductCatalog from "@/components/deals/ProductCatalog";


const DealsOffer = () => {
  return (
    <section className="container flex flex-col gap-14">
      <DealsBannerSection/>
      <DealsFromBrandSection />
      <ProductCatalog />
      <DealsNewArrivalSection />
    </section>
  );
};

export default DealsOffer;

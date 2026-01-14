// import DealsAndOfferBannerSection from "@/components/dealsAndOffer/DealsAndOfferBannerSection";
// import DealsFromBrandSection from "@/components/dealsandoffer/DealsFromBrandSection";
// import NewArrivalSection from "@/components/dealsandoffer/NewArrivalSection";
// import ProductCatalog from "@/components/dealsandoffer/ProductCatalog";
import DealsAndOfferBannerSection from "../../../components/dealsandoffer/DealsAndOfferBannerSection";
import DealsFromBrandSection from "../../../components/dealsandoffer/DealsFromBrandSection";
import NewArrivalSection from "../../../components/dealsandoffer/NewArrivalSection";
import ProductCatalog from "../../../components/dealsandoffer/ProductCatalog";
const DealsAndOffer = () => {
  return (
    <section className="container flex flex-col gap-14">
      <DealsAndOfferBannerSection />
      <DealsFromBrandSection />
      <ProductCatalog />
      <NewArrivalSection />
    </section>
  );
};

export default DealsAndOffer;

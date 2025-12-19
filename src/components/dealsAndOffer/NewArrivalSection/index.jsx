import ProductCatalogSectionWrapper from "@/components/shared/Wrapper/ProductCatalogSectionWrapper";
import ProductCard from "@/components/ui/Cards/ProductCard";
import ProductCardImageContainer from "@/components/ui/Cards/ProductCard/ProductCardImageContainer";
import ProductInfoContainer from "@/components/ui/Cards/ProductCard/ProductInfoContainer";
import ProductPurchaseButton from "@/components/ui/Cards/ProductCard/ProductPurchaseButton";

const NewArrivalSection = () => {
  return (
    <div className="!mb-20">
      <ProductCatalogSectionWrapper id="new_arrival" headerText="New Arrivals">
        <div className="grid grid-cols-6 gap-6">
        {Array.from({ length: 18 }).map((_, index) => (
            <ProductCard key={index} className={"h-full"}>
              <ProductCardImageContainer />
              <ProductInfoContainer />
              <ProductPurchaseButton />
            </ProductCard>
          ))}
        </div>
      </ProductCatalogSectionWrapper>
    </div>
  );
};

export default NewArrivalSection;

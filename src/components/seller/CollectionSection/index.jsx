import ProductDetailsContainer from "@/components/product-listing/ProductContainer/ProductDetailsContainer";
import ProductCatalogSectionWrapper from "@/components/shared/Wrapper/ProductCatalogSectionWrapper";
import ProductCard from "@/components/ui/Cards/ProductCard";
import ProductCardImageContainer from "@/components/ui/Cards/ProductCard/ProductCardImageContainer";


const CollectionSection=()=>{
    return(
        <section>
          <ProductCatalogSectionWrapper id="style_collection" headerText="Gen Z Style Collection" isButton={false} isSelect={true}>
             <div className="grid grid-cols-2 md:grid-cols-4 md:gap-7 gap-2">
        <ProductCard className="max-w-80">
          <ProductCardImageContainer />
          <ProductDetailsContainer />
        </ProductCard>
        <ProductCard className="max-w-80">
          <ProductCardImageContainer />
          <ProductDetailsContainer />
        </ProductCard>
        <ProductCard className="max-w-80">
          <ProductCardImageContainer />
          <ProductDetailsContainer />
        </ProductCard>
        <ProductCard className="max-w-80">
          <ProductCardImageContainer />
          <ProductDetailsContainer />
        </ProductCard>
        <ProductCard className="max-w-80">
          <ProductCardImageContainer />
          <ProductDetailsContainer />
        </ProductCard>
        <ProductCard className="max-w-80">
          <ProductCardImageContainer />
          <ProductDetailsContainer />
        </ProductCard>
         <ProductCard className="max-w-80">
          <ProductCardImageContainer />
          <ProductDetailsContainer />
        </ProductCard>
         <ProductCard className="max-w-80">
          <ProductCardImageContainer />
          <ProductDetailsContainer />
        </ProductCard>
      </div>
        </ProductCatalogSectionWrapper>
        </section>
    )
};

export default CollectionSection;
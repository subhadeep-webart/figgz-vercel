import ProductCard from "@/components/ui/Cards/ProductCard";
import ProductInfoContainer from "@/components/ui/Cards/ProductCard/ProductInfoContainer";
import ProductCardImageContainer from "@/components/ui/Cards/ProductCard/ProductCardImageContainer";
import ProductDetailsContainer from "./ProductDetailsContainer";
const ProductList = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-7">
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
    </>
  );
};

export default ProductList;

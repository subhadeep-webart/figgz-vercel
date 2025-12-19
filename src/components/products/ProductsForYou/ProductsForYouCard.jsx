import ProductDetailsContainer from "@/components/product-listing/ProductContainer/ProductDetailsContainer";
import ProductCard from "@/components/ui/Cards/ProductCard";
import ProductCardImageContainer from "@/components/ui/Cards/ProductCard/ProductCardImageContainer";

const ProductsForYouCard=()=>{
    return(
        <>
          <ProductCard className="max-w-80">
          <ProductCardImageContainer />
          <ProductDetailsContainer />
        </ProductCard>
        </>
    )
};

export default ProductsForYouCard;
import ProductCard from "@/components/ui/Cards/ProductCard";
import SimilarProductCardImage from "./SimilarProductCardImageContainer";

const SimilarProductCard = () => {
  return (
    <>
      <ProductCard className="max-w-full min-w-full h-full">
        <SimilarProductCardImage />
      </ProductCard>
    </>
  );
};

export default SimilarProductCard;

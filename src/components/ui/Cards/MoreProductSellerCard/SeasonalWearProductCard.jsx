import ShopnowButton from "@/components/shared/Button/ShopnowButton";
import ProductSlider from "../../Caraousel/ProductSlider";
import ProductCard from "../ProductCard";
import ProductInfoContainer from "../ProductCard/ProductInfoContainer";
import SeasonalWearProductImageContainer from "./SeasonalWearProductImageContainer";

const SeasonalWearProductCard = () => {
  return (
    <div className="w-full">
      <ProductSlider slidesPerView={3} spaceBetween={37} loop={true}>
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCard key={i} className={"h-[430px]"}>
            <SeasonalWearProductImageContainer />
            <ProductInfoContainer />
            <ShopnowButton className="bg-white border border-secondary text-secondary font-semibold" buttonText={"Shop now"} />
          </ProductCard>
        ))}
      </ProductSlider>
    </div>
  );
};

export default SeasonalWearProductCard;

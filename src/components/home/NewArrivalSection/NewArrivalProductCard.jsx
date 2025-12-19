import ProductCard from "@/components/ui/Cards/ProductCard";
import ProductCardImageContainer from "@/components/ui/Cards/ProductCard/ProductCardImageContainer";
import ProductInfoContainer from "@/components/ui/Cards/ProductCard/ProductInfoContainer";
import ProductPurchaseButton from "@/components/ui/Cards/ProductCard/ProductPurchaseButton";

const NewArrivalProductCard = () => {
    return (
        <ProductCard className={"h-full"}>
            <ProductCardImageContainer />
            <ProductInfoContainer />
            <ProductPurchaseButton />
        </ProductCard>
    )
};

export default NewArrivalProductCard;
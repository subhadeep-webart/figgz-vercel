import ImageWrapper from "@/components/shared/Wrapper/ImageWrapper";
import ProductCard from "../ProductCard";
import ProductImageViewer from "../ProductCard/ProductImageViewer";
import WishlistButton from "@/components/shared/Button/WishlistButton";
import DealProductInfo from "./DealProductInfo";

const BestDealsCard = () => {
    return (
        <ProductCard className="flex flex-col gap-2.5 h-52">
            <ImageWrapper className={"w-full h-28 flex justify-center items-center"}>
                <div className="absolute top-1 right-1">
                    <WishlistButton className={"bg-white h-7 min-w-7 w-7"} />
                </div>
                <ProductImageViewer className="h-24 w-full"/>
            </ImageWrapper>
            <DealProductInfo/>
        </ProductCard>
    )
}

export default BestDealsCard;
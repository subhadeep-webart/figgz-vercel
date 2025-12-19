import ImageWrapper from "@/components/shared/Wrapper/ImageWrapper";
import ProductCard from "../ProductCard";
import WishlistButton from "@/components/shared/Button/WishlistButton";
import ProductImageViewer from "../ProductCard/ProductImageViewer";
import DealProductInfo from "../BestDealsCard/DealProductInfo";

const MoreProductSellerCard=()=>{
    return(
        <ProductCard className="flex flex-col gap-2.5 h-80 max-w-80">
            <ImageWrapper className={"w-full h-52 flex justify-center items-center"}>
                <div className="absolute top-1 right-1">
                    <WishlistButton className={"bg-white h-7 min-w-7 w-7"} />
                </div>
                <ProductImageViewer className="h-24 w-full"/>
            </ImageWrapper>
            <DealProductInfo className2="font-medium text-lg" className1="text-xl" className="min-h-9 h-9 text-base font-semibold !px-3.5"/>
        </ProductCard>
    )
};

export default MoreProductSellerCard;
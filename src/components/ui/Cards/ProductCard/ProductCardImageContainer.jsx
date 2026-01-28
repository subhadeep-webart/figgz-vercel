"use client"
import BestSellerBadge from "@/components/shared/Badge/BestSellerBadge";
import WishlistIcon from "@/components/shared/Button/WishlistButton";
import ImageWrapper from "@/components/shared/Wrapper/ImageWrapper";
import ProductImageViewer from "./ProductImageViewer";
import WishlistButton from "@/components/shared/Button/WishlistButton";
import CartButton from "@/components/shared/Button/CartButton";

const ProductCardImageContainer = () => {
    return (
        <ImageWrapper className={"w-full md:h-60 h-48 flex justify-center items-center"}>
            <div className="absolute top-2.5 left-2.5">
                <BestSellerBadge className={"bg-secondary"} />
            </div>
            <div className="absolute top-2.5 right-2.5">
                <WishlistButton className={"bg-white h-7 min-w-7 w-7 border-border-icon border-1"} />
            </div>
            <ProductImageViewer className="md:h-36 w-40 h-28" />
            <div className="absolute md:bottom-8 bottom-4 right-2.5">
                <CartButton className={"bg-white h-7 min-w-7 w-7 border-border-icon border-1"} />
            </div>
        </ImageWrapper>
    )
}

export default ProductCardImageContainer;
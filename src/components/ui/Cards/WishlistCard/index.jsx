"use client"

import ProductDescription from "../ShoppingCartCard/ProductDescription";
import RightContainer from "../ShoppingCartCard/RightContainer";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import WishlistModifier from "./WishlistModifier";

const WishlistCard = () => {
    return (
        <div className="w-full md:max-h-60 h-full !px-8 !py-7 border-1 border-image-wrapper bg-shopping-cart rounded-2xl flex flex-col md:flex-row gap-5">
            <ProductImage />
            <div className="w-full">
                <ProductDetails />
                <WishlistModifier />
            </div>
        </div>
    )
}

export default WishlistCard;
"use client"
import SingleImageCard from "../SingleImageCard";
import ProductModifierContainer from "./ProductModifierContainer";
import CartProductInformation from "./CartProductInformation";

const ProductDescription = () => {
    return (
        <div className="w-[70%] flex justify-start items-start gap-6">
            <SingleImageCard className={"h-36 w-44 bg-white"} imageWrapperClass={"h-32"} imageClass={"h-32"} />
            <div className="w-full flex flex-col items-start gap-3.5 !mb-10">
                <CartProductInformation />
                <ProductModifierContainer />
            </div>
        </div>
    )
}

export default ProductDescription;
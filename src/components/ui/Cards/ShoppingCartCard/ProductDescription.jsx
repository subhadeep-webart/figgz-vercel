"use client"
import SingleImageCard from "../SingleImageCard";
import ProductModifierContainer from "./ProductModifierContainer";
import CartProductInformation from "./CartProductInformation";

const ProductDescription = () => {
    return (
        <div className="lg:w-[70%] w-full flex flex-col sm:flex-row justify-start items-start gap-6">
            <SingleImageCard className={"h-24 w-28 lg:h-36 lg:w-44 bg-white"} imageWrapperClass={"h-24 w-24 lg:h-32"} imageClass={"h-24 w-24 lg:h-32"} />
            
            <div className="w-full flex flex-col items-start gap-3.5 !mb-10">
                <CartProductInformation />
                <ProductModifierContainer />
            </div>
        </div>
    )
}

export default ProductDescription;
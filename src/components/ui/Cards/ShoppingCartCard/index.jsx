import ProductDescription from "./ProductDescription";
import RightContainer from "./RightContainer";

const ShoppingCartCard = () => {
    return (
        <div className="w-full max-h-60 h-full !px-8 !py-7 border-1 border-image-wrapper bg-shopping-cart rounded-2xl flex justify-start items-start">
            <ProductDescription />
            <RightContainer />
        </div>
    )
}

export default ShoppingCartCard;
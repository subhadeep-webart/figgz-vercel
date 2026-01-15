import RemoveFormCartButton from "@/components/shared/Button/RemoveFormCartButton";
import CartProductInformation from "../../ShoppingCartCard/CartProductInformation";

const ProductDetails = () => {
    return (
        <div className="w-full flex justify-between items-start gap-3.5 !mb-10">
            <div className="max-w-[484px] w-full">
                <CartProductInformation />
            </div>
            <div className="hidden lg:block">
            <RemoveFormCartButton />
            </div>
        </div>
    )
}

export default ProductDetails;
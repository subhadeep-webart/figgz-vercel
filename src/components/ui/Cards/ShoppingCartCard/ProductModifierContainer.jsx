import AddToBagButton from "@/components/shared/Button/AddToBagButton";
import QuantityIncDscButton from "@/components/shared/Button/QuantityIncDscButton";
import CartSelect from "@/components/shared/Select/CartSelect";

const ProductModifierContainer = () => {
    return (
        <div className="w-full flex justify-between items-start">
            <div className="flex flex-col lg:flex-row gap-4">
                <CartSelect />
                <QuantityIncDscButton className="bg-white" />
            </div>
        </div>
    )
}

export default ProductModifierContainer;
import AddToBagButton from "@/components/shared/Button/AddToBagButton";
import ProductModifierContainer from "../../ShoppingCartCard/ProductModifierContainer";

const WishlistModifier = () => {
    return (
        <div className="flex justify-between items-start">
            <ProductModifierContainer />
            <AddToBagButton />
        </div>
    )
}

export default WishlistModifier;
import ShoppingCartCard from "@/components/ui/Cards/ShoppingCartCard";
import CartSectionHeader from "../CartSectionHeader";

const CartCardContainer = () => {
    return (
        <div className="lg:w-3/4 w-full flex flex-col justify-start items-start gap-4">
            <CartSectionHeader/>
            <ShoppingCartCard/>
            <ShoppingCartCard/>
            <ShoppingCartCard/>
        </div>
    )
}

export default CartCardContainer;
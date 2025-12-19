""
import CartCardContainer from "../cart/CartCardContainer";
import CartSectionHeader from "../cart/CartSectionHeader";
import AddAllToCartButton from "../shared/Button/AddAllToCartButton";
import WishlistCard from "../ui/Cards/WishlistCard";

const WishlistContainer = () => {
    return (
        <div className="w-3/4 flex flex-col justify-start items-start gap-4">
            <CartSectionHeader headerText="Wishlist" />
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
            <div className="w-full flex items-start justify-end">
                <div className="w-48">
                    <AddAllToCartButton />
                </div>
            </div>
        </div>
    )
}

export default WishlistContainer;
"";
import CartCardContainer from "../cart/CartCardContainer";
import CartSectionHeader from "../cart/CartSectionHeader";
import AddAllToCartButton from "../shared/Button/AddAllToCartButton";
import CustomButton from "../ui/Buttons/CustomButton";
import WishlistCard from "../ui/Cards/WishlistCard";

const WishlistContainer = () => {
  return (
    <div className="lg:w-3/4 w-full flex flex-col justify-start items-start gap-4">
      <CartSectionHeader headerText="Wishlist" />
      <h3 className="text-foreground text-sm font-bold lg:hidden">Wishlist</h3>
      <WishlistCard />
      <WishlistCard />
      <WishlistCard />
      <div className="w-full flex flex-col gap-4 items-start justify-end">
        <div className="md:w-48 w-full">
          <AddAllToCartButton />
        </div>
        <div className="md:hidden w-full">
          <CustomButton className="w-full bg-transparent border border-secondary text-secondary h-10 font-semibold text-sm rounded-3xl">
            Continue Shopping
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default WishlistContainer;

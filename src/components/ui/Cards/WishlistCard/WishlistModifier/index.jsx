import AddToCartButton from "@/components/shared/Button/AddToCartButton";
import ProductModifierContainer from "../../ShoppingCartCard/ProductModifierContainer";

const WishlistModifier = () => {
  return (
    <div className="flex justify-between items-start">
      <ProductModifierContainer />
      <div className="hidden lg:block">
        <AddToCartButton />
      </div>
    </div>
  );
};

export default WishlistModifier;

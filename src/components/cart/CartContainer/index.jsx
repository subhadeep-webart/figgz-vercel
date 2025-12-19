import CheckoutCartWrapper from "@/components/shared/Wrapper/CheckoutCartWrapper";
import CartCardContainer from "../CartCardContainer";
import PricingInfoContainer from "../PricingInfoContainer";


const CartContainer = () => {
    return (
        <CheckoutCartWrapper>
            <CartCardContainer />
            <PricingInfoContainer />
        </CheckoutCartWrapper>
    )
}

export default CartContainer;
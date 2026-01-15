import { Divider } from "@heroui/react";
import CheckoutButton from "../../Button/CheckoutButton";
import PricingDisplay from "./PricingDisplay";
import CartPaymentInfoWrapper from "../../Wrapper/CartPaymentInfoWrapper";

const CartPaymentInfo = () => {
    return (
        <CartPaymentInfoWrapper>
            <p className="text-product-text-base font-semibold text-sm lg:text-lg">Payment Info</p>
            <div className="flex flex-col gap-2.5 mb-2">
                <PricingDisplay />
                <PricingDisplay labelText="Discount" amount="$ 1.00" />
                <Divider className="my-4  bg-image-wrapper" />
                <PricingDisplay labelText="Total" amount="$ 19.00" />
            </div>
            <CheckoutButton buttonText={"Check Out"} className={"h-11"} />
        </CartPaymentInfoWrapper>
    )
}

export default CartPaymentInfo;
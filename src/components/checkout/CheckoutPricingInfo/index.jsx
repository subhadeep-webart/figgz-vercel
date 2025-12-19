import PaymentDetailsContainer from "@/components/shared/Info/CartPaymentInfo/PaymentDetailsContainer";
import CartPaymentInfoWrapper from "@/components/shared/Wrapper/CartPaymentInfoWrapper";
import CardInformation from "./CardInformation";
import CardDetails from "./CardInformation/CardDetails";
import CheckoutButton from "@/components/shared/Button/CheckoutButton";

const CheckoutPricingInfo = () => {
    return (
        <CartPaymentInfoWrapper>
            <PaymentDetailsContainer headerText="You Are Almost There" />
            <CardInformation />
            <CardDetails />
            <CheckoutButton buttonText={"Check Out"} href="/en/order-confirmation" className={"h-12"} />
        </CartPaymentInfoWrapper>
    )
}

export default CheckoutPricingInfo;
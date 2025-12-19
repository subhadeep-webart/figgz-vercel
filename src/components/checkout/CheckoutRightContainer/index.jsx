import CheckoutPricingInfo from "../CheckoutPricingInfo";
import EnterCuponCodeContainer from "../EnterCuponCodeContainer";

const CheckoutRightContainer = () => {
    return (
        <div className="w-1/4 flex flex-col gap-7">
            <EnterCuponCodeContainer />
            <CheckoutPricingInfo />
        </div>
    )
}

export default CheckoutRightContainer;
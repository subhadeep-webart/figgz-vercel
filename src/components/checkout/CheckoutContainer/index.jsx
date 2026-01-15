import CheckoutCartWrapper from "@/components/shared/Wrapper/CheckoutCartWrapper";
import CheckoutRightContainer from "../CheckoutRightContainer";
import CheckoutInformationContainer from "../CheckoutInformationContainer";

const CheckoutContainer = () => {
    return (
        <CheckoutCartWrapper >
            <CheckoutInformationContainer />
            <CheckoutRightContainer />
        </CheckoutCartWrapper>
    )
}

export default CheckoutContainer;
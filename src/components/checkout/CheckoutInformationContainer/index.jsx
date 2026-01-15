import BillingAddress from "../BillingAddress";
import CheckoutProductContainer from "../CheckoutProductContainer";
import DeliveryAddressContainer from "../DeliveryAddressContainer";

const CheckoutInformationContainer=()=>{
    return(
        <div className="lg:w-3/4 w-full flex flex-col gap-3">
            <DeliveryAddressContainer/>
            <BillingAddress/>
            <CheckoutProductContainer/>
        </div>
    )
}

export default CheckoutInformationContainer;
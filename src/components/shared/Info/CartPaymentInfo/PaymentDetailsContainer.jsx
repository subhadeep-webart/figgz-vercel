import { Divider } from "@heroui/react";
import PricingDisplay from "./PricingDisplay";

const PaymentDetailsContainer = ({ headerText = "Payment Info" }) => {
    return (
        <>
            <p className="text-product-text-base font-semibold text-lg">{headerText}</p>
            <div className="flex flex-col gap-2.5 mb-2">
                <PricingDisplay />
                <PricingDisplay labelText="Discount" amount="$ 1.00" />
                <Divider className="my-4  bg-image-wrapper" />
                <PricingDisplay labelText="Total" amount="$ 19.00" />
            </div>
        </>
    )
}

export default PaymentDetailsContainer;
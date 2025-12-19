import { cn } from "@heroui/react"

const PricingInfo = ({ priceClass = "", priceOfferClass = "", discountClass = "" }) => {
    return (
        <>
            <span className={cn("font-bold text-sm text-foreground", priceClass)}>
                $20.00
            </span>

            <span
                className={cn(
                    "font-normal text-sm text-foreground line-through",
                    priceOfferClass
                )}
            >
                $35.00
            </span>

            <span className={cn("font-semibold text-green-default text-sm", discountClass)}>
                57% off
            </span>
        </>
    )
}

export default PricingInfo

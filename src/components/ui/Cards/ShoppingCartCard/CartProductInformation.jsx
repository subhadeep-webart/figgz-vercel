import PricingInfo from "@/components/shared/Info/PricingInfo";

const CartProductInformation = () => {
    return (
        <>
            <div className="w-full flex flex-col items-start gap-1">
                <p className="text-lg font-medium text-foreground">
                    adidas Terrex AX4 Mid Gore-TEX Hiking Shoes Women’s, Black, Size 8
                </p>
                <p className="text-product-text-info font-normal text-base">Vorem ipsum dolor sit amet, consectetur adipiecte</p>
            </div>
            <div className="flex justify-start items-center gap-1">
                <PricingInfo priceClass="text-xl" priceOfferClass="text-lg text-product-text-strike" discountClass="text-base" />
            </div>
        </>
    )
}

export default CartProductInformation;
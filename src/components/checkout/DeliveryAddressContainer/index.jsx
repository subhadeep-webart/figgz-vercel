import CustomButton from "@/components/ui/Buttons/CustomButton";

const DeliveryAddressContainer = () => {
    return (
        <div className="w-full bg-delivery-address md:!px-10 !px-4 !py-3.5 flex rounded-xl">
            <div className="w-3/4 flex justify-start items-start flex-col gap-1.5">
                <p className="text-foreground font-semibold text-sm md:text-lg">Delivery Address</p>
                <p className="text-xs md:text-base font-normal text-product-text-info">Vorem ipsum dolor sit amet, consectetur adipiscing m dolor sit amet, consectetur adipiscingm dolor sit amet, consectetur adipiscing.</p>
            </div>
            <div className="w-1/4 flex justify-end items-center">
                <CustomButton className={"bg-transparent text-secondary font-medium text-xs md:text-sm"} variant="light">
                    Change
                </CustomButton>
            </div>

        </div>
    )
}

export default DeliveryAddressContainer;
import PricingInfo from "@/components/shared/Info/PricingInfo";
import ShareIcon from "@/components/ui/Icons/ShareIcon";
import Link from "next/link";

const ProductDescription = () => {
    return (
        <div className="w-full flex flex-col items-start gap-3.5 !mb-10">
            <div className="w-full flex flex-col items-start gap-1">
                <div className="w-full flex justify-between items-center">
                    <p className="text-text-display-info text-[10px] lg:text-xl font-medium">Sold By <Link className="text-product-text-base font-semibold" href={"/en/seller-profile"}>Lowrence Doe</Link></p>
                    <ShareIcon className="hidden lg:block"/>
                </div>
                <p className="text-xs lg:text-4xl font-medium text-product-text-base">
                    adidas Terrex AX4 Mid Gore-TEX Hiking Shoes Women’s, Black, Size 8
                </p>
                <p className="text-product-text-info font-normal text-[10px] lg:text-xl">Vorem ipsum dolor sit amet, consectetur adipiecte</p>
            </div>
            <div className="flex justify-start items-center gap-1">
                <PricingInfo priceClass="text-xs lg:text-3xl" priceOfferClass="text-[8px] lg:text-2xl text-product-text-strike" discountClass="text-lg" />
            </div>
        </div>
    )
}

export default ProductDescription;
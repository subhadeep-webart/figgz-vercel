"use client"
import AddToCartButtonDetails from "@/components/shared/Button/AddToCartButtonDetails";
import QuantityIncDscButton from "@/components/shared/Button/QuantityIncDscButton";
import ShopnowButton from "@/components/shared/Button/ShopnowButton";
import { useRouter } from "next/navigation";
import SellProductModal from "./SellProductModal";

const ProductBuyCartButtonContainer = () => {
    const router = useRouter();
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row justify-start items-center gap-5">
                <QuantityIncDscButton />
                <ShopnowButton buttonText={"Buy Now"} className="bg-primary text-raisin text-sm rounded-4xl h-10" clickHandler={() => router.push("/en/checkout")} />
            </div>
            <div className="flex gap-2">
            <AddToCartButtonDetails />
            <SellProductModal/>
            </div>
        </div>
    )
}

export default ProductBuyCartButtonContainer;
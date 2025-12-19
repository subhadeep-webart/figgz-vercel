"use client"
import ShopnowButton from "@/components/shared/Button/ShopnowButton";
import { useRouter } from "next/navigation";

const ProductPurchaseButton = () => {
    const router = useRouter();
    return (
        <div className="w-full">
            <ShopnowButton buttonText={"Shop now"} clickHandler={() => router.push("/en/details")} />
        </div>
    )
}

export default ProductPurchaseButton;
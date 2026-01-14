"use client"
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { cn } from "@heroui/react";
import { useRouter } from "next/navigation";

const AddToCartButtonDetails = ({ buttonText = "Add To Cart", className = "" }) => {
    const router = useRouter();
    return (
        <CustomButton className={cn("w-full bg-trasparent text-seondary h-10 border border-secondary font-medium text-xs lg:text-sm rounded-4xl", className)} clickHandler={() => router.push("/en/cart")}>
            <Icons.CartDetailsIcon />
            <span>{buttonText}</span>
        </CustomButton>
    )
}

export default AddToCartButtonDetails;
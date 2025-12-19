"use client"
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { cn } from "@heroui/react";

const ShopnowButton = ({ buttonText, className = "", clickHandler = () => { } }) => {
    return (
        <CustomButton className={cn("w-full bg-secondary rounded-md text-white text-xs h-7", className)} clickHandler={clickHandler}>
            {buttonText}
        </CustomButton>
    )
}

export default ShopnowButton;
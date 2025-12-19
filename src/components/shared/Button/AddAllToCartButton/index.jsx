import CustomButton from "@/components/ui/Buttons/CustomButton";
import { cn } from "@heroui/react";

const AddAllToCartButton = ({ className = "" }) => {
    return (
        <CustomButton className={cn("w-full bg-primary text-raisin h-10 font-semibold text-sm rounded-3xl", className)}>
            Add All to Cart
        </CustomButton>
    )
}

export default AddAllToCartButton;
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { cn } from "@heroui/react";
import Link from "next/link";

const CheckoutButton = ({ buttonText, href = "/en/checkout", className }) => {
    return (
        <Link className={cn("w-full bg-primary rounded-3xl text-raisin min-h-5 h-5 !py-3 flex justify-center items-center font-semibold text-sm lg:text-base", className)} href={href}>
            {buttonText}
        </Link>
    )
}

export default CheckoutButton;
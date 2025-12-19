"use client"
import { Icons } from "@/assets";
import IconButton from "@/components/ui/Buttons/IconButton";

const CartButton = ({className}) => {
    return (
        <IconButton label="Add to Cart" className={className}>
            <Icons.CartIcon fill="#292929" size={12} />
        </IconButton>
    )
}

export default CartButton;
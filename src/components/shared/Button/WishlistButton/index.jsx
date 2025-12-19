"use client"

import { Icons } from "@/assets";
import IconButton from "@/components/ui/Buttons/IconButton";

const WishlistButton = ({ className }) => {
    return (
        <IconButton label="Add to Cart" className={className}>
            <Icons.Heart className="text-wish-icon" size={12} />
        </IconButton>
    )
}

export default WishlistButton;
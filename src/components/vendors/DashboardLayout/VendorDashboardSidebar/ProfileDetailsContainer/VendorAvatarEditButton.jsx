"use client"
import { Icons } from "@/assets";
import IconButton from "@/components/ui/Buttons/IconButton";

const VendorAvatarEditButton = () => {
    return (
        <IconButton label="Edit Avatar" className={"min-h-8 h-8 min-w-8 w-8 absolute bottom-0 right-3 bg-white"}>
            <Icons.Pen size={18} className="text-banner-btn" />
        </IconButton>
    )
}

export default VendorAvatarEditButton;
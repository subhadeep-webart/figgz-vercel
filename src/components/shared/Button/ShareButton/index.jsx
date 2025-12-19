"use client"

import { Icons } from "@/assets";
import IconButton from "@/components/ui/Buttons/IconButton";

const ShareButton = ({ className }) => {
    return (
        <IconButton label="Click to share" className={className}>
            <Icons.ShareIcon />
        </IconButton>
    )
}

export default ShareButton;
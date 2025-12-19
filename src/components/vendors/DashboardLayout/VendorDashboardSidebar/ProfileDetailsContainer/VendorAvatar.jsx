"use client"
import { Avatar } from "@heroui/react";
import VendorAvatarEditButton from "./VendorAvatarEditButton";

const VendorAvatar = () => {
    return (
        <div className="w-28 h-28 relative">
            <Avatar isBordered color="danger" src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-28 h-28 border-border-vendor-avatar" />
            <VendorAvatarEditButton />
        </div>
    )
}

export default VendorAvatar;
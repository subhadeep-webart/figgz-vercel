"use client"

import { Icons } from "@/assets";
import IconContainer from "@/components/dashboard/IconContainer";
import MenuContainer from "@/components/dashboard/MenuContainer";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserSidebarMenu = ({ menuItem }) => {
    const { name, Icon, iconProps, href } = menuItem;
    const pathname = usePathname();
    const isActive = pathname == href;
    return (
        <Link className="flex justify-between items-center py-6" href={href}>
            <MenuContainer>
                <IconContainer isActive={isActive}>
                    <Icon {...iconProps} color={isActive ? "#ffffff" : "#6B6B6B"} />
                </IconContainer>
                <p className="text-sidebar-text text-lg font-medium">{name}</p>
            </MenuContainer>
            <Icons.ChevronRight className="text-sidebar-icon" size={24} />
        </Link>
    )
}

export default UserSidebarMenu;
"use client"
import { USER_SIDEBAR_MENU } from "@/constants";
import UserSidebarMenu from "../UserSidebarMenu";
import { Divider } from "@heroui/react";
import { Fragment } from "react";
import { usePathname } from "next/navigation";

const UserSidebarMenuList = () => {
    return (
        <div className="flex flex-col gap-6">
            {USER_SIDEBAR_MENU?.map((menuItem, index) => (
                <Fragment key={`menu_item_${index + 1}`}>
                    <UserSidebarMenu menuItem={menuItem} />

                    {index !== USER_SIDEBAR_MENU.length - 1 && (
                        <Divider className="bg-transparent border-dashed my-2 border-border-icon" />
                    )}
                </Fragment>
            ))}
        </div>
    )
}

export default UserSidebarMenuList;
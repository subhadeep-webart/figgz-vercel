"use client"
import { USER_SIDEBAR_MENU } from "@/constants";
import UserSidebarMenu from "../UserSidebarMenu";
import { Divider } from "@heroui/react";
import { Fragment } from "react";
import Link from "next/link";
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";

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

            <Link href="#" className="flex justify-center gap-1.5 font-normal text-xl text-raisin !py-10"><Icons.LogOut/>Log Out</Link>
            <CustomButton className="text-lg text-raisin !px-16 !py-6 border border-raisin bg-transparent">Explore Brand Deals</CustomButton>
        </div>
    )
}

export default UserSidebarMenuList;
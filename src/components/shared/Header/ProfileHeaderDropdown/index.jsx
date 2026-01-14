"use client"

import { PROFILE_DROPDOWN_MENU } from "@/constants";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";

const ProfileHeaderDropdown = () => {
    return (
        <Dropdown placement="bottom-end" classNames={{
            content: "!rounded-md !px-6"
        }}>
            <DropdownTrigger className="cursor-pointer">
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Profile Actions"
                variant="flat"
            >
                {PROFILE_DROPDOWN_MENU?.map((profileMenu, index) => (
                    <DropdownItem
                        key={profileMenu.key}
                        classNames={{
                            base: `!py-3 !rounded-none !px-2`,
                        }}
                        href={profileMenu?.href}
                    >
                        <span style={{ color: profileMenu?.color }}>{profileMenu.name}</span>
                    </DropdownItem>
                ))}

                <DropdownItem
                    key="logout"
                    color="danger"
                    classNames={{
                        base: "!py-4 !rounded-none !px-2",
                    }}
                >
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default ProfileHeaderDropdown;
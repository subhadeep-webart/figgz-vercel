"use client";

import { Icons } from "@/assets";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import NotificationCard from "./NotificationCard";
import ConnectionRequestCard from "./ConnectionRequestCard";

const NotificationDropdown = () => {
  return (
    <Dropdown
      placement="bottom-end"
      classNames={{
        content: "!rounded-lg",
      }}
    >
      <DropdownTrigger>
        <Button
          isIconOnly
          radius="full"
          className="bg-secondary min-w-6 w-6 h-6 lg:w-9 lg:h-9"
        >
          <Icons.Bell color="white" className="min-w-3 w-3 h-3 lg:w-5 lg:h-5" />
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Notification Icons"
        variant="flat"
        closeOnSelect={false}
      >
        <DropdownItem
          classNames={{
            base: `!py-4 !rounded-none !px-2`,
          }}
        >
          <NotificationCard />
        </DropdownItem>
        <DropdownItem
          classNames={{
            base: `!py-4 !rounded-none !px-2`,
          }}
        >
          {/* <ConnectionRequestCard /> */}
          <NotificationCard />
        </DropdownItem>
        <DropdownItem
          classNames={{
            base: `!py-4 !rounded-none !px-2`,
          }}
        >
          <NotificationCard />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NotificationDropdown;

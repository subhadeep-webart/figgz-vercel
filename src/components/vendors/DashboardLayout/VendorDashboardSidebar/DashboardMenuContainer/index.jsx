"use client";

import IconContainer from "@/components/dashboard/IconContainer";
import MenuContainer from "@/components/dashboard/MenuContainer";
import { cn } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardMenuContainer = ({ menuItem }) => {
  const { name = "", Icon, iconProps, href } = menuItem;
  const pathname = usePathname();

  const isActive = pathname === href 
  // || pathname.startsWith(`${href}/`);


  return (
    <Link href={href} className="block w-full">
      <div className="relative w-full">
        {isActive && (
          <span className="absolute -right-5 top-0 h-full w-1 bg-yellow-400 rounded-l-md" />
        )}

        <MenuContainer className={cn("w-full !px-2 !pb-4 rounded-none")}>
          <IconContainer isActive={isActive}>
            <Icon {...iconProps} />
          </IconContainer>

          <p className="text-vendor-sidebar text-sm font-normal">{name}</p>
        </MenuContainer>
      </div>
    </Link>
  );
};

export default DashboardMenuContainer;

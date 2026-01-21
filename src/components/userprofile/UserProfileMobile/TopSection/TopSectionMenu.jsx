"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TopSectionMenu = ({ menuItem }) => {
  const { name, href } = menuItem;
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 !px-4 rounded-full h-8 w-36
        border transition-all whitespace-nowrap bg-transparent
        ${
          isActive
            ? "text-secondary border-secondary"
            : "border-border-icon text-sidebar-text"
        }
      `}
    >
      <span className="text-sm font-medium">{name}</span>
    </Link>
  );
};

export default TopSectionMenu;

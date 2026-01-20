
"use client";

import { PUBLIC_IMAGES } from "@/assets";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { useState } from "react";

const CategoryNavTab = ({ navTitle, onOpenChange }) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (isOpen) => {
    setOpen(isOpen);
    onOpenChange?.(isOpen); // Notify parent
  };

  if (!navTitle?.subMenus) {
    return (
      <p className="text-text-base font-semibold text-base md:text-lg cursor-pointer">
        {navTitle.name}
      </p>
    );
  }

  return (
    <div
      onMouseEnter={() => handleOpenChange(true)}
        onMouseLeave={() => handleOpenChange(false)}
    >
      {open && (
        <div
          className="fixed inset-x-0 bottom-0 top-[100px] z-[60] bg-black/20 backdrop-blur-md"
          onMouseEnter={() => handleOpenChange(true)}
        />
      )}
      <Dropdown
        isOpen={open}
        placement="bottom-start"
        closeOnSelect={false}
        radius="none"
        classNames={{
          base: "!left-[-15px] !right-0 !transform-none !max-w-none",
        }}
      >
        <DropdownTrigger>
          <p className="text-text-base font-semibold text-base md:text-lg cursor-pointer hover:underline">
            {navTitle.name}
          </p>
        </DropdownTrigger>

        <DropdownMenu
          aria-label="Mega menu"
          className=" w-screen !max-w-none !py-6 !px-10 !shadow-none z-[80]"
        >
          <DropdownItem
            key="content"
            isReadOnly
            className="hover:!bg-transparent cursor-default"
          >
            <div className="flex justify-between">
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-6 gap-8 flex-1">
                  {navTitle.subMenus.map((col, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold !mb-3 text-base text-black">
                        {col.title}
                      </h4>
                      <ul className="!space-y-2 text-base text-gray-600">
                        {col.items.map((item, i) => (
                          <li
                            key={i}
                            className="hover:text-black cursor-pointer"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-[260px]">
                <img
                  src={PUBLIC_IMAGES.Advertisement}
                  className="rounded-none"
                  alt="banner"
                />
              </div>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default CategoryNavTab;


"use client";

import { PUBLIC_IMAGES } from "@/assets";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const CategoryNavTab = ({ navTitle }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleOpenChange = (isOpen) => {
    clearTimeout(timeoutRef.current);

    if (isOpen) {
      setOpen(true);
    } else {
      timeoutRef.current = setTimeout(() => {
        setOpen(false);
      }, 100);
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!navTitle?.subMenus) {
    return (
      <p className="text-text-base font-semibold text-base md:text-lg cursor-pointer">
        {navTitle.name}
      </p>
    );
  }

  return (
    <>
      <Dropdown
        isOpen={open}
        closeOnSelect={false}
        radius="none"
        classNames={{
          base: "!left-[-12px] !right-[0] !top-[-10px] !transform-none !max-w-none",
          trigger: "!shadow-none !scale-100 !transform-none !pb-2",
        }}
      >
        <DropdownTrigger
          onMouseEnter={() => handleOpenChange(true)}
          onMouseLeave={() => handleOpenChange(false)}
        >
          <p
            className={`text-text-base font-semibold text-base md:text-lg cursor-pointer 
        hover:underline hover:text-black
        ${open ? "underline text-black" : ""}`}
          >
            {navTitle.name}
          </p>
        </DropdownTrigger>

        <DropdownMenu
          onMouseEnter={() => handleOpenChange(true)}
          onMouseLeave={() => handleOpenChange(false)}
          className="w-screen !max-w-none !py-6 !px-10 !shadow-none z-[80]"
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
                          <li key={i} className="hover:text-black cursor-pointer">
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

 
      {open && typeof window !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 bg-black/50 z-[70] pointer-events-none top-[50%]"
        />,
        document.body
      )}
    </>
  );
};

export default CategoryNavTab;
"use client";

import { useDropdown } from "../DropdownProvider";

export default function BodyWrapper({ children }) {
  const { isDropdownOpen } = useDropdown();

  return (
    // <div className={`transition-all duration-300 ${isDropdownOpen ? 'blur-sm' : ''}`}>
    //   {children}
    // </div>
    <>
      {isDropdownOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[70] transition-opacity duration-300 pointer-events-none"
          style={{ top: "50%" }}
        />
      )}

      {children}
    </>
  );
}

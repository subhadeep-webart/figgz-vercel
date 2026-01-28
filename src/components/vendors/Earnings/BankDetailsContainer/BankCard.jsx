"use client"
import { cn } from "@heroui/react";

const BankCard = ({title,des,className}) => {
  return (
    <div className={cn("bg-sidebar-icon-container rounded-xl !py-5 !px-3 md:min-w-48 w-full",className)}>
      <h3 className="font-semibold text-sm text-dark-gray !mb-1">{title}</h3>
      <span className="font-normal text-sm text-dark-gray">{des}</span>
    </div>
  );
};

export default BankCard;

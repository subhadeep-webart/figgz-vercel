"use client"
import { Avatar } from "@heroui/react";
import CustomChip from "../../CustomChip";
import { Icons } from "@/assets";

const TopProductCard = () => {
    return (
        <div className="w-full !py-5">
            <div className="flex md:gap-5 gap-2">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-16 md:w-12 h-12 " />
                <div className="w-full !space-y-1">
                    <div className="flex justify-between items-center">
                        <CustomChip className={"border-1 border-border-top-product-chip h-5 !px-4 md:!px-8 md:h-9 "}>
                            <p className="md:text-sm text-xs text-invoice-date">In Stock: <span className="text-top-product-chip">25 pieces</span></p>
                        </CustomChip>
                        <Icons.Ellipsis className="text-black" size={18} />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="max-w-[90px] md:max-w-full">
                            <h3 className="text-vendor-base text-sm font-medium truncate">Forever Yours Uuuuuuu</h3>
                            <p className="text-invoice-date text-xs font-normal truncate">Borem Ipsum Borem Borem</p>
                        </div>
                        <p className="text-invoice-date text-xs font-normal">Sold Unit: <span className="text-invoice-text font-medium">2541</span></p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default TopProductCard;
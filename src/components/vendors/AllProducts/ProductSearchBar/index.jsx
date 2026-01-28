"use client"

import { Icons } from "@/assets";
import { Input } from "@heroui/react";

const ProductSearchBar = () => {
    return (
        <div className="border-product-search border-1 rounded-4xl md:max-w-[272px] w-full">
            <Input
                isClearable
                classNames={{
                    inputWrapper: "bg-transparent hover:!bg-transparent shadow-none group-data-[focus=true]:bg-transparent",
                    innerWrapper: "!px-1 md:!px-4",
                    input:"hidden md:block"
                }}
                startContent={
                    <Icons.Search className="text-black !px-2" size={32} />
                }
                placeholder="searched by UPC or Item Name"
            />
        </div>
    )
}

export default ProductSearchBar;
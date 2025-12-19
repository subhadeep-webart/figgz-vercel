"use client"
import { Icons } from "@/assets";
import ProductFilterAccordion from "./ProductFilterAccordion";

const ProductFilter = () => {
    return (
        <div className="w-full border-1 border-border-product-filter rounded-3xl !py-8 !px-6 space-y-4">
            <div className="w-full flex justify-between items-center">
                <p className="text-lg text-foreground font-bold">Fulfilled by</p>
                <Icons.RotateCw className="text-foreground" size={18} />
            </div>
            <div className="w-full">
                <ProductFilterAccordion />
            </div>
        </div>
    )
}

export default ProductFilter;
"use client"
import { cn } from "@heroui/react";

const ProductDetailsContainerWrapper = ({ children, className }) => {
    return (
        <section className={cn("flex justify-start gap-7 max-h-[697px]", className)}>
            {children}
        </section>
    )
}

export default ProductDetailsContainerWrapper;
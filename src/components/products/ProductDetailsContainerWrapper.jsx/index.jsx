"use client"
import { cn } from "@heroui/react";

const ProductDetailsContainerWrapper = ({ children, className }) => {
    return (
        <section className={cn("flex flex-col lg:flex-row justify-start gap-7 lg:max-h-[697px] h-full", className)}>
            {children}
        </section>
    )
}

export default ProductDetailsContainerWrapper;
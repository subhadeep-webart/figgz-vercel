import { PUBLIC_IMAGES } from "@/assets";
import { cn } from "@heroui/react";
import Image from "next/image";

const ProductImageViewer = ({ className = "" }) => {
    return (
        <div className={cn("h-36 w-40 relative my-auto mx-auto", className)}>
            <Image src={PUBLIC_IMAGES.Product1} className="w-full h-full object-contain" alt="Product 1 image" fill />
        </div>
    )
}

export default ProductImageViewer;
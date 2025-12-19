import { cn } from "@heroui/react";

const ImageWrapper = ({ className, children }) => {
    return (
        <div className={cn("relative border-1 border-image-wrapper rounded-[18px] px-2.5 py-2 flex justify-center items-center", className)}>
            {children}
        </div>
    )
}

export default ImageWrapper;
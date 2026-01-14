import ImageWrapper from "@/components/shared/Wrapper/ImageWrapper";
import Link from "next/link";
import Image from "next/image";
import { PUBLIC_IMAGES } from "@/assets";
import { cn } from "@heroui/react";

const SingleImageCard = ({
    className,
    imageWrapperClass,
    imageClass,
    href = "#",
    src = PUBLIC_IMAGES.Brand1,
    alt = "Category image"
}) => {
    return (
        <Link
            href={href}
            className={cn(
                "h-44 md:w-48 w-40 space-y-3 flex justify-center items-center border-1 border-image-wrapper rounded-3xl",
                className
            )}
        >
            <ImageWrapper
                className={cn("h-40 md:w-40 w-36 rounded-3xl border-none", imageWrapperClass)}
            >
                <div className={cn("md:w-40 w-36 h-40 relative", imageClass)}>
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className={"w-full h-full object-contain"}
                    />
                </div>
            </ImageWrapper>
        </Link>
    );
};

export default SingleImageCard;

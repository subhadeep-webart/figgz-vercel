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
                "md:h-44 md:w-48 w-32 h-36 space-y-3 flex justify-center items-center border-1 border-image-wrapper rounded-3xl",
                className
            )}
        >
            <ImageWrapper
                className={cn("md:h-40 md:w-40 w-30 h-36 rounded-3xl border-none", imageWrapperClass)}
            >
                <div className={cn("md:w-40 w-30 h-36 md:h-40 relative", imageClass)}>
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

import { PUBLIC_IMAGES } from "@/assets";
import ImageWrapper from "@/components/shared/Wrapper/ImageWrapper";
import Image from "next/image";
import Link from "next/link";

const ColorCheckboxImagePreview = () => {
    return (
        <Link href={"#"} className="h-24 w-28 space-y-3 flex justify-center items-center border-1 border-image-wrapper rounded-3xl">
            <ImageWrapper className={"h-24 w-24 rounded-3xl border-none"}>
                <div className="w-24 h-20 relative">
                    <Image src={PUBLIC_IMAGES.ColorBox} alt="Color 1 image" fill className="w-full h-full object-contain" />
                </div>
            </ImageWrapper>
        </Link>
    )
}

export default ColorCheckboxImagePreview;
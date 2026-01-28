import { PUBLIC_IMAGES } from "@/assets";
import ImageWrapper from "@/components/shared/Wrapper/ImageWrapper";
import Image from "next/image";
import Link from "next/link";

const FashionCard = () => {
    return (
        <Link href={"#"} className="flex flex-col gap-5 md:h-64 h-52 w-32 md:w-48 space-y-3">
            <ImageWrapper className={"h-52 w-32 md:w-48 rounded-3xl"}>
                <div className="w-28 md:w-40 h-40 relative">
                    <Image src={PUBLIC_IMAGES.WomenFashion1} alt="Wmen Fashion 1 image" fill className="w-full h-full object-cover" />
                </div>
            </ImageWrapper>
            <p className="text-foreground text-xs md:text-base font-semibold text-left px-2">Tops</p>
        </Link>
    )
}

export default FashionCard;
"use client"
import { PUBLIC_IMAGES } from "@/assets";
import ImageWrapper from "@/components/shared/Wrapper/ImageWrapper";
import Image from "next/image";
import Link from "next/link";

const DealsFromBrandCard=()=>{
    return(
          <Link href={"#"} className="flex flex-col gap-5 h-40 w-32 md:h-56 md:w-48 space-y-3">
            <ImageWrapper className={"h-32 w-32 md:h-44 md:w-48 rounded-3xl"}>
                <div className="h-28 w-32 md:w-48 md:h-40 relative">
                    <Image src={PUBLIC_IMAGES.WomenFashion1} alt="Wmen Fashion 1 image" fill className="w-full h-full object-contain" />
                </div>
            </ImageWrapper>
            <p className="text-foreground text-sm md:text-lg font-bold text-left px-2">Women Clothes</p>
        </Link>
    )
};

export default DealsFromBrandCard;
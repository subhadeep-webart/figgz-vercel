import Link from "next/link";
import Image from "next/image";
import { PUBLIC_IMAGES } from "@/assets";
import ImageWrapper from "@/components/shared/Wrapper/ImageWrapper";

const VendorListingCard=({ item })=>{
      const { categoryName } = item;
    return(
        <>
         <Link href={"/seller-profile"} className="w-64 h-60 flex flex-col gap-3">
            <ImageWrapper className={"border-1 border-border-category w-40 h-36 md:w-64 md:h-60 rounded-3xl"}>
                <div className="w-40 h-36 md:w-64 md:h-60 relative">
                    <Image src={PUBLIC_IMAGES.Book} alt="Category 1 image" fill className="w-full h-full object-cover" />
                </div>
            </ImageWrapper>
            <p className="text-foreground text-xs md:text-xl font-semibold text-left">{categoryName}</p>
        </Link>
        </>
    )
};

export default VendorListingCard;
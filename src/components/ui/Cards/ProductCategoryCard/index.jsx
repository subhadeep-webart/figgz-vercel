import { PUBLIC_IMAGES } from "@/assets";
import ImageWrapper from "@/components/shared/Wrapper/ImageWrapper";
import Image from "next/image";
import Link from "next/link";

const ProductCategoryCard = ({ item }) => {
    const { categoryName } = item;
    return (
        <Link href={"#"} className="h-36 w-36 md:h-48 md:w-48 flex flex-col gap-3">
            <ImageWrapper className={"border-1 border-border-category md:h-40 h-36 w-36 md:w-48 rounded-3xl"}>
                <div className="w-20 h-20 md:w-28 md:h-28 relative">
                    <Image src={PUBLIC_IMAGES.Category1} alt="Category 1 image" fill className="w-full h-full object-cover" />
                </div>
            </ImageWrapper>
            <p className="text-foreground text-base font-semibold text-center">{categoryName}</p>
        </Link>
    )
}

export default ProductCategoryCard;
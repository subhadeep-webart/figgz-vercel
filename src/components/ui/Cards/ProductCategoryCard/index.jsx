import { PUBLIC_IMAGES } from "@/assets";
import ImageWrapper from "@/components/shared/Wrapper/ImageWrapper";
import Image from "next/image";
import Link from "next/link";

const ProductCategoryCard = ({ item }) => {
    const { categoryName } = item;
    return (
        <Link href={"#"} className="h-48 w-48 flex flex-col gap-3">
            <ImageWrapper className={"border-1 border-border-category h-40 w-48 rounded-3xl"}>
                <div className="w-28 h-28 relative">
                    <Image src={PUBLIC_IMAGES.Category1} alt="Category 1 image" fill className="w-full h-full object-cover" />
                </div>
            </ImageWrapper>
            <p className="text-foreground text-base font-semibold text-center">{categoryName}</p>
        </Link>
    )
}

export default ProductCategoryCard;
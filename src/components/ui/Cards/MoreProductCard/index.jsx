import ImageWrapper from "@/components/shared/Wrapper/ImageWrapper";
import ProductCard from "../ProductCard";
import Image from "next/image";
import { PUBLIC_IMAGES } from "@/assets";

const MoreProductCard = () => {
    return (
        <ProductCard className={"h-52 flex justify-start flex-col gap-2 max-w-48"}>
            <ImageWrapper className={"w-full flex justify-center items-center border-none px-0"}>
                <div className="w-48 h-36 relative">
                    <Image src={PUBLIC_IMAGES.HomeEdition} alt="Home Edition" fill className="w-full h-full object-cover rounded-md" />
                </div>
            </ImageWrapper>
            <div className="flex flex-col">
                <p className="text-foreground font-semibold text-sm md:text-base">Home & Kitchen</p>
                <p className="text-product-text-secondary font-normal text-xs md:text-sm">Our exclusive product</p>
            </div>
        </ProductCard>
    )
}

export default MoreProductCard;
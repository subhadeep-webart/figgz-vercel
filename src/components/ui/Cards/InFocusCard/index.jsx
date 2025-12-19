import ImageWrapper from "@/components/shared/Wrapper/ImageWrapper";
import ProductCard from "../ProductCard";
import Image from "next/image";
import { PUBLIC_IMAGES } from "@/assets";

const InFocusCard = () => {
    return (
        <ProductCard className={"h-52 flex justify-start flex-col gap-3 max-w-48"}>
            <ImageWrapper className={"w-full flex justify-center items-center border-none px-0"}>
                <div className="w-48 h-44 relative">
                    <Image src={PUBLIC_IMAGES.InFocusImage} alt="Home Edition" fill className="w-full h-full object-cover rounded-md" />
                </div>
            </ImageWrapper>
        </ProductCard>
    )
}

export default InFocusCard;
import { Icons } from "@/assets";

const ProductInfoContainer = () => {
    return (
        <div className="flex flex-col gap-1.5 w-full md:h-36 h-28 justify-center items-start !px-1.5">
            <span className="font-medium text-[10px] md:text-xs text-foreground">Abstract Printed Polo Collar Pure Cotton Shirt</span>
            <div className="flex justify-center items-center gap-1">
                <span className="font-bold text-xs md:text-sm text-foreground">4.5</span>
                <Icons.Star fill="#FBA004" size={18} />
                <span className="font-normal text-xs md:text-sm text-foreground">(1.7K)</span>
            </div>
            <div className="flex justify-center items-start gap-1 md:gap-2.5">
                <span className="font-bold text-xs md:text-sm text-foreground">$20.00</span>
                <span className="font-normal text-xs md:text-sm text-foreground line-through">$35.00</span>
                <span className="font-bold text-xs md:text-sm text-wish-icon">57%</span>
            </div>
            <p className="font-medium text-[10px] md:text-xs text-foreground">Only 8 left in stock</p>
        </div>
    )
}

export default ProductInfoContainer;
import { Icons } from "@/assets";

const ProductDetailsContainer = () => {
    return (
        <div className="flex flex-col gap-1.5 w-full h-36 justify-center items-start !px-1.5">
            <div className="flex items-start justify-between">
                <span className="font-medium text-xs text-foreground inline-block">Abstract Printed Polo Collar Pure Cotton Shirt</span>
                <div className="flex justify-start gap-1">
                    <span className="font-bold text-sm text-foreground inline-block">4.5</span>
                    <Icons.Star fill="#FBA004" size={18} />
                </div>
            </div>
            <div className="flex justify-center items-start gap-2.5">
                <span className="font-bold text-sm text-foreground">$ 20.00</span>
                <span className="font-normal text-sm text-foreground line-through">$ 35.00</span>
                <span className="font-bold text-sm text-green-default">57%</span>
            </div>
            <div className="flex justify-start items-center gap-1">
                <Icons.DeliveryIcon /><span className="inline-block text-lg font-normal text-gray-default">Free Delivery</span>
            </div>
        </div>
    )
}

export default ProductDetailsContainer;

import ColorChartSection from "./ColorChartSection";
import ProductBuyCartButtonContainer from "./ProductBuyCartButtonContainer";
import ProductDescription from "./ProductDescription";
import SizeChartSection from "./SizeChartSection";

const ProductDetails = () => {
    return (
        <div className="lg:w-2/4 w-full lg:max-h-[697px] h-full">
            <div className="hidden lg:block">
            <ProductDescription />
            </div>
            <div className="lg:hidden !mb-4"> <ProductBuyCartButtonContainer /></div>
            <div className="flex flex-col justify-start items-start gap-8 !mb-6">
                <SizeChartSection />
                <ColorChartSection />
            </div>
            <div className="hidden lg:block">
            <ProductBuyCartButtonContainer />
            </div>
        </div>
    )
}

export default ProductDetails;
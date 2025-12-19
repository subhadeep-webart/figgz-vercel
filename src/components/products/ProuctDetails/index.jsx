import SizeChart from "../SizeChart";
import ColorChartSection from "./ColorChartSection";
import ProductBuyCartButtonContainer from "./ProductBuyCartButtonContainer";
import ProductDescription from "./ProductDescription";
import SizeChartSection from "./SizeChartSection";

const ProductDetails = () => {
    return (
        <div className="w-2/4 max-h-[697px] h-full">
            <ProductDescription />
            <div className="flex flex-col justify-start items-start gap-8 !mb-6">
                <SizeChartSection />
                <ColorChartSection />
            </div>
            <ProductBuyCartButtonContainer />
        </div>
    )
}

export default ProductDetails;
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import SizeChartContainer from "../SizeChart/SizeChartContainer";
import SizeChart from "../SizeChart";
import FilterSectionWrapper from "./FilterSectionWrapper";

const SizeChartSection = () => {
    return (
        <FilterSectionWrapper>
            <div className="flex justify-between items-center">
                <h4 className="text-product-text-base text-lg font-normal">Size</h4>
                <CustomButton className="bg-transparent border-1 border-border-product-filter w-28 h-8">
                    <Icons.ChartIcon />
                    <span className="text-border-product-filter text-sm font-medium">Size Chart</span>
                </CustomButton>
            </div>
            <SizeChart />
        </FilterSectionWrapper>
    )
}

export default SizeChartSection;
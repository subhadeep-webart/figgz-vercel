import ColorChart from "../ColorChart";
import FilterSectionWrapper from "./FilterSectionWrapper";

const ColorChartSection = () => {
    return (
        <FilterSectionWrapper>
            <div className="flex justify-between items-center">
                <h4 className="text-product-text-base text-xs lg:text-lg font-normal">Color</h4>
            </div>
            <ColorChart/>
        </FilterSectionWrapper>
    )
}

export default ColorChartSection;
import SizeChart from "../SizeChart";
import FilterSectionWrapper from "./FilterSectionWrapper";
import SizeChartModal from "../SizeChart/SizeChartModal";

const SizeChartSection = () => {
  return (
    <FilterSectionWrapper>
      <div className="flex justify-between items-center">
        <h4 className="text-product-text-base text-xs lg:text-lg font-normal">Size</h4>
        <SizeChartModal />
      </div>
      <SizeChart />
    </FilterSectionWrapper>
  );
};

export default SizeChartSection;

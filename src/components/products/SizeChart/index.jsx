import { SIZE_CHART } from "@/constants";
import SizeChartContainer from "./SizeChartContainer";

const SizeChart = () => {
    return (
        <div className="flex gap-3 w-full">
            <SizeChartContainer sizeChart={SIZE_CHART} />
        </div>

    )
}

export default SizeChart;
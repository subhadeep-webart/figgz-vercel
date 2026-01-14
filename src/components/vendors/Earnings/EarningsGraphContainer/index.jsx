import { PUBLIC_IMAGES } from "@/assets";
import EarningGraphHeader from "./EarningGraphHeader";
// import Graph from "./Graph";

const {
  default: VendorDashboardTableWrapper,
} = require("@/components/shared/Wrapper/VendorDashboardTableWrapper");

const EarningsGraphContainer = () => {
  return (
    <VendorDashboardTableWrapper>
      <div>
        <EarningGraphHeader />
        <div className="!p-6">
          {/* <Graph /> */}
          <img src={PUBLIC_IMAGES.EarningGraph} />
        </div>
      </div>
    </VendorDashboardTableWrapper>
  );
};

export default EarningsGraphContainer;

import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import InputField from "@/components/ui/InputField";

const LimitsTabBody = () => {
  return (
    <VendorDashboardTableWrapper>
      <form>
        <div className="flex gap-6 w-[60%]">
          <InputField
            label="Usage limit per coupon"
            placeholder="Choose a Status"
            type="text"
          />
          <InputField
            label="Limit usage to X items"
            placeholder="Enter Amount"
            type="text"
          />
        </div>
      </form>
    </VendorDashboardTableWrapper>
  );
};

export default LimitsTabBody;

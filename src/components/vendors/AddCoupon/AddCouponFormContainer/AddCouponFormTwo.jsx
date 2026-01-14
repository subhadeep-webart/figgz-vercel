import InputField from "@/components/ui/InputField";
import SelectField from "@/components/ui/Select/SelectField";

const {
  default: VendorDashboardTableWrapper,
} = require("@/components/shared/Wrapper/VendorDashboardTableWrapper");

const AddCouponFormTwo = () => {
  return (
    <VendorDashboardTableWrapper>
      <form>
        <div className="flex flex-col gap-4">
          <div>
            <label className="font-semibold text-sm text-[#000000]">
              Status
            </label>
            <SelectField
              placeholder="Choose a Status"
              options={[
                { label: "Status1", value: "status1" },
                { label: "Status2", value: "status2" },
              ]}
            />
          </div>
          <div>
            <label className="font-semibold text-sm text-[#000000]">
              Visibility
            </label>
            <SelectField
              placeholder="Choose a Visibility"
              options={[
                { label: "Visibility1", value: "visibility1" },
                { label: "Visibility2", value: "visibility2" },
              ]}
            />
          </div>
          <div>
            <label className="font-semibold text-sm text-[#000000]">
              Publish immediately
            </label>
            <div className="flex justify-between gap-4">
              <InputField placeholder="Date" type="text" />
              <InputField placeholder="Time" type="text" />
            </div>
          </div>
        </div>
      </form>
    </VendorDashboardTableWrapper>
  );
};

export default AddCouponFormTwo;

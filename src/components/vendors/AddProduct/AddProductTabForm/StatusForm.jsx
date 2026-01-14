const {
  default: VendorDashboardTableWrapper,
} = require("@/components/shared/Wrapper/VendorDashboardTableWrapper");
const { default: InputField } = require("@/components/ui/InputField");
const { default: SelectField } = require("@/components/ui/Select/SelectField");

const StatusForm = () => {
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

export default StatusForm;

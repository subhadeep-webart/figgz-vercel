import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import SelectField from "@/components/ui/Select/SelectField";
import ImageUploadField from "./ImageUploadField";

const UploadImageForm = () => {
  return (
    <VendorDashboardTableWrapper>
      <form>
        <div className="flex flex-col gap-4">
                  <ImageUploadField  />
          <div>
            <label className="font-semibold text-sm text-[#000000]">
              Category
            </label>
            <SelectField
              placeholder="Choose a Category"
              options={[
                { label: "Status1", value: "status1" },
                { label: "Status2", value: "status2" },
              ]}
            />
          </div>
          <div>
            <label className="font-semibold text-sm text-[#000000]">
              Product Tags
            </label>
            <SelectField
              placeholder="Enter Name"
              options={[
                { label: "Status1", value: "status1" },
                { label: "Status2", value: "status2" },
              ]}
            />
          </div>
          <div>
            <label className="font-semibold text-sm text-[#000000]">
              Brands
            </label>
            <SelectField
              placeholder="Enter Name"
              options={[
                { label: "Status1", value: "status1" },
                { label: "Status2", value: "status2" },
              ]}
            />
          </div>
        </div>
      </form>
    </VendorDashboardTableWrapper>
  );
};
export default UploadImageForm;

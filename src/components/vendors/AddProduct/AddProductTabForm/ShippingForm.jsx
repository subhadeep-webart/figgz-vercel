import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import InputField from "@/components/ui/InputField";

const ShippingForm = () => {
  return (
    <VendorDashboardTableWrapper>
      <h3 className="font-semibold text-lg text-avatar-heading !mb-4">
        Shipping
      </h3>
      <form>
        <div className="flex flex-col gap-4">
          <div className="flex gap-6">
            <InputField
              label="Weight (lbs)"
              placeholder="Enter Name"
              type="text"
            />
            <InputField
              label="Shipping class"
              placeholder="Enter Name"
              type="text"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-[#000000] !mb-2">
              Dimensions (in)
            </label>
            <div className="flex gap-6">
              <InputField label="Length" placeholder="Enter Name" type="text" />
              <InputField label="Width" placeholder="Enter Name" type="text" />
              <InputField label="Height" placeholder="Enter Name" type="text" />
            </div>
          </div>
        </div>
      </form>
    </VendorDashboardTableWrapper>
  );
};

export default ShippingForm;

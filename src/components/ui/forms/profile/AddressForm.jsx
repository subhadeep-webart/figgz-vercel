import CustomButton from "../../Buttons/CustomButton";
import InputField from "../../InputField";

const AddressForm = () => {
  return (
    <div className="grid gap-8 border border-border-product-filter !p-5 md:border-none md:!p-0 rounded-3xl md:rounded-none">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        <InputField
          label="Business Address Line 1"
          placeholder="Enter address line 1"
          type="text"
        />
        <InputField
          label="Business Address Line 2"
          placeholder="Enter address line 2"
          type="text"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        <InputField label="City" placeholder="Enter city name" type="text" />
        <InputField
          label="State / Province"
          placeholder="Enter state name"
          type="text"
        />
        <InputField label="Country" placeholder="Select country" type="text" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        <InputField
          label="Postal / ZIP Code"
          placeholder="Enter Postal / ZIP Code"
          type="text"
        />
        <InputField
          label="Business Phone Number"
          placeholder="Enter phone number"
          type="text"
        />
        <InputField
          label="Alternate Phone Number"
          placeholder="Enter alternate phone number"
          type="text"
        />
      </div>

      <CustomButton className="md:hidden">Add Address</CustomButton>
    </div>
  );
};

export default AddressForm;

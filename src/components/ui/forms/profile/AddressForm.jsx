import InputField from "../../InputField";
import SelectField from "../../Select/SelectField";

const AddressForm = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-14">
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
      <div className="flex gap-14">
        <InputField label="City" placeholder="Enter city name" type="text" />
        <InputField
          label="State / Province"
          placeholder="Enter state name"
          type="text"
        />
        <InputField label="Country" placeholder="Select country" type="text" />
        {/* <SelectField
          label="Country"
          placeholder="Select country"
          options={[
            { label: "USA", value: "us" },
            { label: "Canada", value: "ca" },
            { label: "United Kingdom", value: "uk" },
          ]}
        /> */}
      </div>
      <div className="flex gap-14">
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
    </div>
  );
};

export default AddressForm;

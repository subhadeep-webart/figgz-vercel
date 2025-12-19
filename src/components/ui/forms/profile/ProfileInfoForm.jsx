import CustomCheckbox from "@/app/[locale]/(profile)/personal-info/CustomRadio";
import InputField from "../../InputField";

const ProfileInfoForm = () => {
  return (
    <div className="grid grid-cols-2 gap-11">
      <InputField label="Name" placeholder="Enter name" type="text" />
      <InputField label="Email" placeholder="Enter email" type="email" />
      <InputField label="Phone number" placeholder="Enter phone number" type="text" />
      <CustomCheckbox/>
    </div>
  );
};

export default ProfileInfoForm;

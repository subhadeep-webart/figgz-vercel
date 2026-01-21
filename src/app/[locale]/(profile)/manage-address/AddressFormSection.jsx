import { Icons } from "@/assets";
import AddressForm from "@/components/ui/forms/profile/AddressForm";

const AddressFormSection = () => {
  return (
    <div>
      <div className="flex justify-between items-center !mb-5">
        <h3 className="font-bold text-base text-foreground">Add New Address</h3>
        <div className="flex gap-1 items-center">
          <Icons.GpsLocationIcon  className="md:w-7 md:h-7 w-4 h-4"/>
          <span className="font-medium text-xs md:text-sm underline">GPS Location</span>
        </div>
      </div>
      <AddressForm />
    </div>
  );
};

export default AddressFormSection;

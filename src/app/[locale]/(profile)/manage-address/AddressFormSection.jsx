import { Icons } from "@/assets";
import AddressForm from "@/components/ui/forms/profile/AddressForm";

const AddressFormSection = () => {
  return (
    <div>
      <div className="flex justify-between items-center !mb-5">
        <h3 className="font-bold text-base text-foreground">Add New Address</h3>
        <div className="flex gap-1 items-center">
          <Icons.GpsLocationIcon size={27} />
          <span className="font-medium text-sm underline">GPS Location</span>
        </div>
      </div>
      <AddressForm />
    </div>
  );
};

export default AddressFormSection;

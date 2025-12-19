import { Icons } from "@/assets";
import CustomChip from "@/components/ui/CustomChip";

const AddressesCard = ({address,description}) => {
  return (
    <div className="bg-delivery-address w-full rounded-xl !mb-5">
        <div className="flex items-center justify-center !p-7 gap-20">
      <div className="flex justify-center items-start gap-2.5">
        <Icons.LocationIcon size={42} />
        <div className="flex flex-col gap-1.5">
          <h3 className="font-semibold text-lg text-foreground">
            {address}
          </h3>
          <span className="font-normal text-base text-product-text-info">
            {description}
          </span>
        </div>
      </div>
      <div className="flex gap-4">
        <CustomChip
          className="text-secondary border-1 border-secondary h-[47px] font-medium text-sm"
          variant="bordered"
        >
          Edit
        </CustomChip>
         <CustomChip
          className="text-danger border-1 border-danger h-[47px] font-medium text-sm"
          variant="bordered"
        >
          Delete
        </CustomChip>
      </div>
      </div>
    </div>
  );
};

export default AddressesCard;

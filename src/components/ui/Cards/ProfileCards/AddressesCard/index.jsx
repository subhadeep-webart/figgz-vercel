import { Icons } from "@/assets";
import CustomChip from "@/components/ui/CustomChip";

const AddressesCard = ({ address, description }) => {
  return (
    <div className="bg-delivery-address w-full rounded-xl !mb-5">
      <div className="flex md:items-center md:justify-center items-start justify-start md:!p-7 !p-4 md:gap-20">
        <div className="flex justify-center items-start md:gap-2.5 gap-1.5">
          <Icons.LocationIcon size={42} />
          <div className="flex flex-col md:gap-1.5 gap-1">
            <h3 className="font-semibold text-sm md:text-lg text-foreground">{address}</h3>
            <span className="font-normal text-xs md:text-base text-product-text-info">
              {description}
            </span>
          </div>
        </div>
        <div className="gap-4 hidden md:flex">
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
    
          <Icons.Ellipsis className="md:hidden"/>

      </div>
    </div>
  );
};

export default AddressesCard;

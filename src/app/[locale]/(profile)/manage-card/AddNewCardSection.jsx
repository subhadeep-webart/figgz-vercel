import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import NewCardForm from "@/components/ui/forms/profile/NewCardForm";

const AddNewCardSection = () => {
  return (
    <div>
      <div className="flex items-center justify-start gap-1.5 !mb-3">
        <Icons.CardIcon width={30} height={27} />
        <h3 className="font-bold text-base text-foreground">Add New Card</h3>
      </div>
      <div className="border border-border-product-filter !p-5 md:border-none md:!p-0 rounded-3xl md:rounded-none">
      <NewCardForm/>
      <div className="flex items-center justify-center md:items-end md:justify-end !mt-12">
      <CustomButton className="text-secondary !px-[60px] !py-3">Add Card</CustomButton>
      </div>
      </div>
    </div>
  );
};

export default AddNewCardSection;

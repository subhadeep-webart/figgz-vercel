import { PUBLIC_IMAGES } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";

const InvoicePage = () => {
  return (
    <section className="container section_padding flex flex-col items-center justify-center">
      <div>
        <img src={PUBLIC_IMAGES.Invoice} className="max-w-[595px] w-full"/>
      </div>
      <CustomButton className="!px-9 h-12 text-secondary font-medium text-base">
        <span className="underline">Download Invoice</span>
      </CustomButton>
    </section>
  );
};

export default InvoicePage;

import CustomButton from "@/components/ui/Buttons/CustomButton";
import BankCard from "./BankCard";
import AddBankModal from "./AddBankModal";
import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";



const BankDetailsContainer = () => {
  return (
    <VendorDashboardTableWrapper>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h3 className="font-semibold text-base md:text-xl text-avatar-heading">
            Bank Details
          </h3>
          <AddBankModal />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <BankCard title="Bank Name" des="Citi Bank Inc" />
          <BankCard title="Branch Name" des="London" />
          <BankCard title="Account Number" des="5396 5250 1908 XXXX" />
            <BankCard title="Account Name" des="Darren" className="md:hidden"/>
        </div>
        <div className="flex md:gap-20 gap-5">
          <BankCard title="Account Name" des="Darren" className="hidden md:block"/>
          <div className="flex gap-3 justify-end items-end">
            <CustomButton className="bg-transparent border border-foregound text-foregound text-sm font-medium w-28 md:w-32 !py-2.5">
              Edit
            </CustomButton>
            <CustomButton className="bg-transparent border border-foregound text-foregound text-sm font-medium md:w-44 w-32 !py-2.5">
              View All Banks
            </CustomButton>
          </div>
        </div>
      </div>
    </VendorDashboardTableWrapper>
  );
};

export default BankDetailsContainer;

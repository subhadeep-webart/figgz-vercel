import CustomButton from "@/components/ui/Buttons/CustomButton";
import BankCard from "./BankCard";
import AddBankModal from "./AddBankModal";
import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";



const BankDetailsContainer = () => {
  return (
    <VendorDashboardTableWrapper>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h3 className="font-semibold text-xl text-avatar-heading">
            Bank Details
          </h3>
          <AddBankModal />
        </div>
        <div className="flex justify-between gap-3">
          <BankCard title="Bank Name" des="Citi Bank Inc" />
          <BankCard title="Branch Name" des="London" />
          <BankCard title="Account Number" des="5396 5250 1908 XXXX" />
        </div>
        <div className="flex gap-20">
          <BankCard title="Account Name" des="Darren" />
          <div className="flex gap-3 justify-end items-end">
            <CustomButton className="bg-transparent border border-foregound text-foregound text-sm font-medium w-32 !py-2.5">
              Edit
            </CustomButton>
            <CustomButton className="bg-transparent border border-foregound text-foregound text-sm font-medium w-44 !py-2.5">
              View All Banks
            </CustomButton>
          </div>
        </div>
      </div>
    </VendorDashboardTableWrapper>
  );
};

export default BankDetailsContainer;

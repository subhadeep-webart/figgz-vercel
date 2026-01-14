import { Icons } from "@/assets";
import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import CustomButton from "@/components/ui/Buttons/CustomButton";

const TransactionsContainer = () => {
  return (
    <VendorDashboardTableWrapper>
      <div className="flex flex-col gap-4 justify-center items-center h-full min-h-60">
        <div className="bg-mint-green w-12 h-12 flex items-center justify-center rounded-full">
          <Icons.Wallet size={20} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-sm font-normal text=-avatar-heading">
            Total Earning This Month
          </h4>
          <span className="font-bold text-2xl text-vendor-warning">$2659</span>
        </div>
        <CustomButton
          className="bg-primary text-raisin text-sm font-medium w-44 !py-2.5"
        >
          View Transactions
        </CustomButton>
      </div>
    </VendorDashboardTableWrapper>
  );
};

export default TransactionsContainer;

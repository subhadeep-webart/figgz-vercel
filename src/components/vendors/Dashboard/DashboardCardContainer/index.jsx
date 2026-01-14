
import DashboardCardContainerWrapper from "@/components/shared/Wrapper/DashboardCardContainerWrapper";
import VendorDashboardCard from "@/components/ui/Cards/VendorDashboardCard";

const DashboardCardContainer = ({ headerName = "", data = [] }) => {
  return (
    <DashboardCardContainerWrapper headerName={headerName}>
      <VendorDashboardCard
        total="3541"
        title="Daily Orders"
      />
      <VendorDashboardCard total="$8741" title="Daily Transactions" />
      <VendorDashboardCard total="541" title="Unshipped Orders" />
      <VendorDashboardCard total="$98745" title="Current Revenue" />
    </DashboardCardContainerWrapper>
  );
};

export default DashboardCardContainer;

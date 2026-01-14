import DashboardCardContainerWrapper from "@/components/shared/Wrapper/DashboardCardContainerWrapper";
import VendorDashboardCard from "@/components/ui/Cards/VendorDashboardCard";

const DashboardCardContainerTotal = ({ headerName = "", data = [] }) => {
  return (
    <DashboardCardContainerWrapper headerName={headerName}>
      <VendorDashboardCard total="32541" title="Total Orders" />
      <VendorDashboardCard total="158" title="Return." />
      <VendorDashboardCard total="95417" title="Total Transactions" />
      <VendorDashboardCard total="147" title="Total Live Products" />
      <VendorDashboardCard total="$931485" title="Total Revenue" />
      <VendorDashboardCard total="$5471" title="Total Profit" />
    </DashboardCardContainerWrapper>
  );
};

export default DashboardCardContainerTotal;

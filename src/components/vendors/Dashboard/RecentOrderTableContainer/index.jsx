import DashboardCardContainerWrapper from "@/components/shared/Wrapper/DashboardCardContainerWrapper";
import VendorCardHeaderWrapper from "@/components/shared/Wrapper/VendorCardHeaderWrapper";
import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import RecentOrderTable from "@/components/ui/Tables/RecentOrdersTable";

const RecentOrderTableContainer = () => {
    return (
        <VendorDashboardTableWrapper>
            <VendorCardHeaderWrapper headerText="Top Products">
            </VendorCardHeaderWrapper>
            <RecentOrderTable />
        </VendorDashboardTableWrapper>
    )
}

export default RecentOrderTableContainer;
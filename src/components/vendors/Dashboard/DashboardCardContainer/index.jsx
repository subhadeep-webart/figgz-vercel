import DashboardCardContainerWrapper from "@/components/shared/Wrapper/DashboardCardContainerWrapper";
import VendorDashboardCard from "@/components/ui/Cards/VendorDashboardCard";

const DashboardCardContainer = ({ headerName = "", data = [] }) => {
    return (
        <DashboardCardContainerWrapper headerName={headerName}>
            <VendorDashboardCard />
        </DashboardCardContainerWrapper>
    )
}

export default DashboardCardContainer;
import TopProductCard from "@/components/ui/Cards/TopProductCard";
import VendorInvoiceCard from "@/components/ui/Cards/VendorInvoiceCard";
import DashboardCardContainer from "@/components/vendors/Dashboard/DashboardCardContainer";
import RecentOrderTableContainer from "@/components/vendors/Dashboard/RecentOrderTableContainer";
import TopProductContainer from "@/components/vendors/Dashboard/TopProductContainer";

const DashboardPage = () => {
    return (
        <div>
            <DashboardCardContainer headerName="Daily Statistics" />
            <VendorInvoiceCard/>
            <RecentOrderTableContainer/>
            <TopProductContainer/>
        </div>
    )
}

export default DashboardPage;
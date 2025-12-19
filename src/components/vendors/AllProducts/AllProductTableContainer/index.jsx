import VendorCardHeaderWrapper from "@/components/shared/Wrapper/VendorCardHeaderWrapper";
import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import AllProductsTable from "@/components/ui/Tables/AllProductsTable";
import RecentOrderTable from "@/components/ui/Tables/RecentOrdersTable";

const AllProductTableContainer = () => {
    return (
        <VendorDashboardTableWrapper>
            <VendorCardHeaderWrapper headerText="All Products">
            </VendorCardHeaderWrapper>
            <RecentOrderTable label="All Products" />
        </VendorDashboardTableWrapper>
    )
}

export default AllProductTableContainer;
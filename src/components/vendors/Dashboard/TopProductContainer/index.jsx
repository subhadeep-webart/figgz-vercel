import VendorCardHeaderWrapper from "@/components/shared/Wrapper/VendorCardHeaderWrapper";
import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import TopProductCard from "@/components/ui/Cards/TopProductCard";
import { Divider } from "@heroui/react";
import Link from "next/link";

const TopProductContainer = () => {
    return (
        <VendorDashboardTableWrapper className={"!px-6"}>
            <VendorCardHeaderWrapper headerText="Top Products" className="border-l-3 border-border-vendor-card-header">
                <Link href={"#"} className="text-card-header font-medium text-xs">
                    View All
                </Link>
            </VendorCardHeaderWrapper>
            <div className="flex flex-col">
                <>
                    <TopProductCard />
                    <Divider className="my-2 border-vendor-table-divider"/>
                </>
                <TopProductCard />
                <TopProductCard />
            </div>
        </VendorDashboardTableWrapper>
    )
}

export default TopProductContainer;
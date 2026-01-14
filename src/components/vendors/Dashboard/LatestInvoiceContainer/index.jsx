import VendorCardHeaderWrapper from "@/components/shared/Wrapper/VendorCardHeaderWrapper";
import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import VendorInvoiceCard from "@/components/ui/Cards/VendorInvoiceCard";
import Link from "next/link";

const LatestInvoiceContainer=()=>{
    return(
          <VendorDashboardTableWrapper className={"!px-6"}>
            <VendorCardHeaderWrapper headerText="Latest Invoice" className="border-none">
                <Link href={"#"} className="text-card-header font-medium text-xs">
                    View All
                </Link>
            </VendorCardHeaderWrapper>
            <div className="flex flex-col gap-4">
              <VendorInvoiceCard/>
              <VendorInvoiceCard/>
              <VendorInvoiceCard/>
              <VendorInvoiceCard/>
            </div>
        </VendorDashboardTableWrapper>
    )
};

export default LatestInvoiceContainer;
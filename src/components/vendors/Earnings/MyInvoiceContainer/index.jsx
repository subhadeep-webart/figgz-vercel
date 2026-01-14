import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceTable from "./InvoiceTable";

const MyInvoiceContainer = () => {
  return (
    <VendorDashboardTableWrapper>
      <div className="flex flex-col gap-7">
        <InvoiceHeader />
        <InvoiceTable />
      </div>
    </VendorDashboardTableWrapper>
  );
};

export default MyInvoiceContainer;

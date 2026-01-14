import { Icons } from "@/assets";
import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import InputField from "@/components/ui/InputField";

const PurchaseInvoiceForm = () => {
  return (
    <VendorDashboardTableWrapper>
      <form>
        <InputField
          label="Product purchase invoice"
          placeholder="Upload File"
          endContent={<Icons.Download size={20} />}
        />
      </form>
    </VendorDashboardTableWrapper>
  );
};

export default PurchaseInvoiceForm;

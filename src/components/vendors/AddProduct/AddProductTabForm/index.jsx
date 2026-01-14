import GeneralForm from "./GeneralForm";
import InventoryForm from "./InventoryForm";
import PurchaseInvoiceForm from "./PurchaseInvoiceForm";
import ShippingForm from "./ShippingForm";
import StatusForm from "./StatusForm";
import UploadImageForm from "./UploadImageForm";
import VarientForm from "./VarientForm";

const AddProductTabForm = () => {
  return (
    <div className="flex gap-4">
      <div className="w-[70%] flex flex-col gap-6">
        <GeneralForm />
        <InventoryForm />
        <ShippingForm/>
        <VarientForm/>
      </div>
      <div className="w-[30%] flex flex-col gap-6">
        <StatusForm />
        <UploadImageForm/>
        <PurchaseInvoiceForm/>
      </div>
    </div>
  );
};

export default AddProductTabForm;

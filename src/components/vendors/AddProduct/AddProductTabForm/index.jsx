import GeneralForm from "./GeneralForm";
import InventoryForm from "./InventoryForm";
import PurchaseInvoiceForm from "./PurchaseInvoiceForm";
import ShippingForm from "./ShippingForm";
import StatusForm from "./StatusForm";
import UploadImageForm from "./UploadImageForm";
import VarientForm from "./VarientForm";

const AddProductTabForm = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-[70%] w-full flex flex-col gap-6">
        <GeneralForm />
        <InventoryForm />
        <ShippingForm/>
        <VarientForm/>
      </div>
      <div className="md:w-[30%] w-full flex flex-col gap-6">
        <StatusForm />
        <UploadImageForm/>
        <PurchaseInvoiceForm/>
      </div>
    </div>
  );
};

export default AddProductTabForm;

import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import InputField from "@/components/ui/InputField";
import TextareaField from "@/components/ui/TextArea";

const AddCouponFormOne = () => {
  return (
    <VendorDashboardTableWrapper>
      <form>
        <div className="flex flex-col gap-4">
          <InputField
            label="Add new coupon"
            placeholder="Enter product name"
            type="text"
          />
          <TextareaField
            label="Description"
            placeholder="Enter description"
            classNames={{
              inputWrapper: [
                "bg-transparent",
                "hover:bg-transparent",
                "focus:bg-transparent",
                "active:bg-transparent",

                "data-[hover=true]:bg-transparent",
                "data-[focus=true]:bg-transparent",
                "data-[focus-visible=true]:shadow-none",
                "data-[pressed=true]:bg-transparent",

                "data-[filled=true]:bg-transparent",
                "data-[filled=true]:data-[hover=true]:bg-transparent",
                "data-[filled=true]:data-[focus=true]:bg-transparent",
              ],
              input:[
                "min-h-[120px]",
              ]
            }}
          />
        </div>
      </form>
    </VendorDashboardTableWrapper>
  );
};

export default AddCouponFormOne;

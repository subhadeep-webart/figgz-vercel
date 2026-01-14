import VendorDashboardTableWrapper from "@/components/shared/Wrapper/VendorDashboardTableWrapper";
import InputField from "@/components/ui/InputField";
import TextareaField from "@/components/ui/TextArea";

const GeneralForm = () => {
  return (
    <VendorDashboardTableWrapper>
        <h3 className="font-semibold text-lg text-avatar-heading !mb-4">General</h3>
      <form>
        <div className="flex flex-col gap-4">
          <InputField
            label="Product Name"
            placeholder="Enter Name."
            type="text"
          />
          <InputField
            label="Product Type"
            placeholder="Choose A Type"
            type="text"
          />
          <InputField
            label="Short Description"
            placeholder="Enter description"
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
              input: ["min-h-[120px]"],
            }}
          />
          <div className="flex gap-6">
            <InputField
              label="Regular price ($)"
              placeholder="Choose a Status"
              type="text"
            />
            <InputField
              label="Sale price ($)"
              placeholder="Choose a Status"
              type="text"
            />
          </div>
        </div>
      </form>
    </VendorDashboardTableWrapper>
  );
};

export default GeneralForm;

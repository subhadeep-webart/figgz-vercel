import SelectField from "@/components/ui/Select/SelectField";

const {
  default: VendorSectionHeaderWrapper,
} = require("@/components/shared/Wrapper/VendorSectionHeaderWrapper");

const ReviewsHeader = () => {
  return (
    <VendorSectionHeaderWrapper
      headerText="Reviews"
      subHeaderText="Forem ipsum dolor sitsectetur adipiscing elit."
    >
      <div className="md:hidden">
        <SelectField
          options={[
            { label: "Yearly", value: "yearly" },
            { label: "Monthly", value: "monthly" },
          ]}
          defaultSelectedKeys={["yearly"]}
          classNames={{
            base: ["min-w-[100px]"],
            trigger: [
              "!px-2",
              "bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent",
              "data-[hover=true]:bg-transparent",
              "data-[focus=true]:bg-transparent",
              "data-[pressed=true]:bg-transparent",
              "data-[open=true]:bg-transparent","border"
              ,
            ],
            value: ["text-sidebar-lucide text-xs"],
          }}
        />
      </div>
    </VendorSectionHeaderWrapper>
  );
};

export default ReviewsHeader;

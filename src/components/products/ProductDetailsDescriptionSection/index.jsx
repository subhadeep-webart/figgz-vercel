import InformationSection from "./InformationSection";
import TabSection from "./TabSection";

const ProductDetailsDescriptionSection = () => {
  return (
    <div className="flex flex-col gap-11 w-full lg:w-3/4">
      <InformationSection />
      <TabSection />
    </div>
  );
};

export default ProductDetailsDescriptionSection;

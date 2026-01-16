import { Icons } from "@/assets";
import ProductFilterModal from "@/components/product-listing/ProductFilter/ProductFilterModal";
import CustomButton from "@/components/ui/Buttons/CustomButton";

const ProductDisplayInfo = () => {
  return (
   <div className="">
      <div className="lg:flex justify-between hidden">
      <p className="font-normal text-text-display-info text-lg ">
        Showing Products{" "}
        <span className="text-foreground">
          1-12 Results for{" "}
          <span className="text-secondary font-semibold">{`"Shoe"`}</span>
        </span>
      </p>
      <div className="flex gap-4">
        <CustomSelect
            SIZE_CHART={[
              { key: "Newest", label: "Newest" },
              { key: "Popular", label: "Popular" },
              { key: "Most searched", label: "Most searched" },
            ]}
            label="Sort by:"
          />

           <CustomSelect
            SIZE_CHART={[
              { key: "Newest", label: "Newest" },
              { key: "Popular", label: "Popular" },
              { key: "Most searched", label: "Most searched" },
            ]}
            label="Products Per Row"
          />
      </div>
      </div>
      <div className="flex justify-between lg:hidden">
        <div>
          <h3 className="font-semibold text-[#000000] text-sm">All products</h3>
          <p className=" text-text-display-info font-medium text-xs">
            Showing 1-12 of 75 Results
          </p>
        </div>
        <ProductFilterModal />
      </div>
    </div>
  );
};

export default ProductDisplayInfo;

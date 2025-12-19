import { Icons } from "@/assets";
import PricingInfo from "@/components/shared/Info/PricingInfo";

const SimilarProductDetails = () => {
  return (
    <>
      <div className="flex flex-col gap-1.5 w-full h-20 justify-center items-start !px-5 !pb-8">
        <div className="flex justify-start items-center gap-1 text-text-display-info font-medium text-lg">
          Sold by-{" "}
          <span className="inline-block text-secondary">Lorence Doe</span>
        </div>

        <div className="flex items-start justify-between gap-1">
          <span className="font-medium text-xs text-foreground inline-block">
            Abstract Printed Polo Collar Pure Cotton Shirt
          </span>
          <div className="flex justify-start gap-1">
            <span className="font-bold text-sm text-foreground inline-block">
              4.5
            </span>
            <Icons.Star fill="#FBA004" size={18} />
          </div>
        </div>
        <div className="flex justify-center items-start gap-2.5 ">
          <PricingInfo
            priceClass="text-sm"
            priceOfferClass="text-sm text-product-text-strike"
            discountClass="text-sm"
          />
        </div>
      </div>
    </>
  );
};

export default SimilarProductDetails;

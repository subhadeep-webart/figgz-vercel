import VendorListingCard from "@/components/ui/Cards/VendorListingCard";

const WhatWeOfferList = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-1.5  md:gap-8 !space-y-11">
        <VendorListingCard item={{ categoryName: "Electronics" }} />
        <VendorListingCard item={{ categoryName: "Men & Women Fashion" }} />
        <VendorListingCard item={{ categoryName: "Electronics" }} />
        <VendorListingCard item={{ categoryName: "Men & Women Fashion" }} />
      </div>
    </div>
  );
};

export default WhatWeOfferList;

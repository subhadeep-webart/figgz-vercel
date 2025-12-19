import VendorListingCard from "../ui/Cards/VendorListingCard";



const VendorListingSection=()=>{
    return(
        <>
        
         <div className="w-full grid grid-cols-4 gap-8 !space-y-11">
           <VendorListingCard item={{ categoryName: "GlobalMart Vendor" }} />
           <VendorListingCard item={{ categoryName: "Urban Supply Co." }} />
           <VendorListingCard item={{ categoryName: "TrendWave" }} />
           <VendorListingCard item={{ categoryName: "Nova Merchants" }} />
           <VendorListingCard item={{ categoryName: "GlobalMart Vendor" }} />
           <VendorListingCard item={{ categoryName: "Urban Supply Co." }} />
           <VendorListingCard item={{ categoryName: "TrendWave" }} />
           <VendorListingCard item={{ categoryName: "Nova Merchants" }} />
        </div>
        </>
    )
};

export default VendorListingSection;
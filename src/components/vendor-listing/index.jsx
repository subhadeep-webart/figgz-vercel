import ProductCatalogSectionWrapper from "../shared/Wrapper/ProductCatalogSectionWrapper";
import VendorListingSection from "./VendorListingSection";

const VendorListing = () => {
    return (
        <ProductCatalogSectionWrapper id="all_vendor" headerText="All Vendor" isButton={false} isSelect={true}>
            <VendorListingSection />
        </ProductCatalogSectionWrapper>
    )
};

export default VendorListing;
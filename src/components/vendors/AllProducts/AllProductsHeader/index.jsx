import VendorSectionHeaderWrapper from "@/components/shared/Wrapper/VendorSectionHeaderWrapper";
import RightSection from "./RightSection";

const AllProductsHeader = () => {
    return (
        <VendorSectionHeaderWrapper headerText="Product" subHeaderText="Forem ipsum dolor sitsectetur adipiscing elit.">
            <RightSection />
        </VendorSectionHeaderWrapper>
    )
}

export default AllProductsHeader;
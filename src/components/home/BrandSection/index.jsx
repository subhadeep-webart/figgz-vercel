"use client"

import ProductCatalogSectionWrapper from "@/components/shared/Wrapper/ProductCatalogSectionWrapper";
import CategorySlider from "@/components/ui/Caraousel/CategorySlider";
import SingleImageCard from "@/components/ui/Cards/SingleImageCard";

const BrandSection = ({ headerText }) => {
    return (
        <ProductCatalogSectionWrapper id={headerText} headerText={headerText} isBrand={true} isButton={false}>
            <CategorySlider data={[1, 2, 3, 4, 5, 6]} Component={SingleImageCard} />
        </ProductCatalogSectionWrapper>
    )
}

export default BrandSection;
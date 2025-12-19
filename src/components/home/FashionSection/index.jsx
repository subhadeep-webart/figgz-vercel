"use client"

import ProductCatalogSectionWrapper from "@/components/shared/Wrapper/ProductCatalogSectionWrapper";
import CategorySlider from "@/components/ui/Caraousel/CategorySlider";
import FashionCard from "@/components/ui/Cards/FashionCard";
import { WOMENS_FASHION } from "@/constants";

const FashionSection = ({ headerText }) => {
    return (
        <ProductCatalogSectionWrapper id={headerText} headerText={headerText}>
            <CategorySlider data={WOMENS_FASHION} Component={FashionCard} />
        </ProductCatalogSectionWrapper>
    )
}

export default FashionSection;
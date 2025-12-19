"use client"

import ProductCatalogSectionWrapper from "@/components/shared/Wrapper/ProductCatalogSectionWrapper";
import CategorySlider from "@/components/ui/Caraousel/CategorySlider";
import NewArrivalProductCard from "./NewArrivalProductCard";

const NewArrivalSection = ({ headerText }) => {
    return (
        <ProductCatalogSectionWrapper id={headerText} headerText={headerText}>
            <CategorySlider data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} Component={NewArrivalProductCard} />
        </ProductCatalogSectionWrapper>
    )
}

export default NewArrivalSection;
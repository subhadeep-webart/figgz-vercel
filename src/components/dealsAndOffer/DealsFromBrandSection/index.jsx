"use client"
import ProductCatalogSectionWrapper from "@/components/shared/Wrapper/ProductCatalogSectionWrapper";
import CategorySlider from "@/components/ui/Caraousel/CategorySlider";
import DealsFromBrandCard from "@/components/ui/Cards/DealsFromBrandCard";
import { WOMENS_FASHION } from "@/constants";

const DealsFromBrandSection = () => {
    return (
        <ProductCatalogSectionWrapper id="deals_from_brand" headerText="DEALS From The Brand" isButton={false}>
            <CategorySlider data={WOMENS_FASHION} Component={DealsFromBrandCard} />
        </ProductCatalogSectionWrapper>
    )
};

export default DealsFromBrandSection;
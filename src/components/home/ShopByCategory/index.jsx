import ProductCatalogSectionWrapper from "@/components/shared/Wrapper/ProductCatalogSectionWrapper";
import CategoryList from "./CategoryList";

const ShopByCategory = () => {
    return (
        <ProductCatalogSectionWrapper id="shop_by_category" headerText="Shop by Category">
            <CategoryList />
        </ProductCatalogSectionWrapper>
    )
}

export default ShopByCategory;
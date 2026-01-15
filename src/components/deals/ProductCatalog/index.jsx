import CatalogButton from "./CatalogButton";

const ProductCatalog = () => {
    return (
        <div className="w-full flex gap-2 md:gap-6 items-center category_navigation_slider_wrapper">
            <CatalogButton categoryName={"All"} isSelected={true} />
            <CatalogButton categoryName={"Laptops & Computer"} />
            <CatalogButton categoryName={"Laptops & Computer"} />
            <CatalogButton categoryName={"Laptops & Computer"} />
            <CatalogButton categoryName={"Laptops & Computer"} />
            <CatalogButton categoryName={"Laptops & Computer"} />
            <CatalogButton categoryName={"Laptops & Computer"} />
        </div>
    )
}

export default ProductCatalog;
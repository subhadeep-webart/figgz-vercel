import ProductCategoryCard from "@/components/ui/Cards/ProductCategoryCard";

const CategoryList = () => {
    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8">
            <ProductCategoryCard item={{ categoryName: "Beauty" }} />
            <ProductCategoryCard item={{ categoryName: "Beauty" }} />
            <ProductCategoryCard item={{ categoryName: "Beauty" }} />
            <ProductCategoryCard item={{ categoryName: "Beauty" }} />
            <ProductCategoryCard item={{ categoryName: "Beauty" }} />
            <ProductCategoryCard item={{ categoryName: "Beauty" }} />
        </div>
    )
}

export default CategoryList;
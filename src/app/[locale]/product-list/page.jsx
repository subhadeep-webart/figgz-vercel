"use client"
import BrandCaraousalContainer from "@/components/product-listing/BrandCaraousalContainer";
import ProductContainer from "@/components/product-listing/ProductContainer";
import ProductFilter from "@/components/product-listing/ProductFilter";

const ProductListing = () => {
    return (
        <section className="container">
         
            <BrandCaraousalContainer/>
   
            <div className="w-full flex justify-start items-start gap-7">
                <div className="w-1/4 hidden lg:block">
                    <ProductFilter />
                </div>
                <div className="lg:w-3/4 w-full">
                    <ProductContainer />
                </div>
            </div>
        </section>
    )
}

export default ProductListing;
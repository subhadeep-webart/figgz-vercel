import ProductList from "./ProductList";
import ProductSortHeader from "./ProductListInfoHeader";

const ProductContainer=()=>{
    return(
        <>
            <div className="flex flex-col gap-5">
                <ProductSortHeader/>
                <ProductList/>
            </div>
        </>
    )
}

export default ProductContainer;
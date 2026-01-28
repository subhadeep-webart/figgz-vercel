import AddNewProductButton from "../AddNewProductButton";
import ProductSearchBar from "../ProductSearchBar";

const RightSection=()=>{
    return(
        <div className="flex gap-3 justify-end items-center max-w-[90px] md:max-w-[432px] w-full">
            <ProductSearchBar/>
            <AddNewProductButton/>
        </div>
    )
}

export default RightSection;
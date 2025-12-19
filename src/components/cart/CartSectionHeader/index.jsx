import ContinueShoppingButton from "./ContinueShoppingButton";

const CartSectionHeader=({headerText="Shopping Cart"})=>{
    return(
        <div className="w-full flex justify-between items-center">
            <p className="text-secondary text-lg font-semibold">{headerText}</p>
            <ContinueShoppingButton/>
        </div>
    )
}

export default CartSectionHeader;
const CartPaymentInfoWrapper = ({ children }) => {
    return (
        <div className="border-1 border-border-product-filter rounded-3xl w-full !px-7 !py-5 flex flex-col gap-7">
            {children}
        </div>
    )
}

export default CartPaymentInfoWrapper;
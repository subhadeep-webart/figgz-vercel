const CheckoutCartWrapper=({children})=>{
    return(
        <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-7">
            {children}
        </div>
    )
}

export default CheckoutCartWrapper;
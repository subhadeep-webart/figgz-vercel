import CartPaymentInfo from "@/components/shared/Info/CartPaymentInfo";


const PricingInfoContainer=()=>{
    return(
        <div className="lg:w-1/4 w-full">
              <h3 className="text-foreground text-lg font-bold lg:hidden !mb-4">Shopping Cart</h3>
           <CartPaymentInfo/>
        </div>
    )
}

export default PricingInfoContainer;
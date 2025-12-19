import CartPaymentInfoWrapper from "@/components/shared/Wrapper/CartPaymentInfoWrapper";
import CuponCodeInputForm from "./CuponCodeInputForm";

const EnterCuponCodeContainer=()=>{
    return(
        <CartPaymentInfoWrapper>
            <p className="text-lg font-semibold text-product-text-base">Enter Cupon Code</p>
            <CuponCodeInputForm/>
        </CartPaymentInfoWrapper>   
    )
}

export default EnterCuponCodeContainer;
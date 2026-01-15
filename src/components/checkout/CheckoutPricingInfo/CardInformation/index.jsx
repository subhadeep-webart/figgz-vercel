import PaymnetMethodCheck from "../PaymentMethodCheck";

const CardInformation=()=>{
    return(
        <div className="w-full">
             <p className="text-product-text-base font-semibold text-sm md:text-lg">Payment Method</p>
             <PaymnetMethodCheck/>
        </div>
    )
}

export default CardInformation;
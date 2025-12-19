import OrderConfirmed from "@/components/order/orderConfirm/OrderConfirmed";
import OrderConfirmedButton from "@/components/order/orderConfirm/OrderConfirmedButton";
import OrderConfirmedTable from "@/components/order/orderConfirm/OrderConfirmedTable";

const OrderConfirmation=()=>{
    return(
        <section className="container !mb-20">
            <div className="flex flex-col gap-10">
            <OrderConfirmed/>
            <OrderConfirmedTable/>
            <OrderConfirmedButton/>
            </div>
        </section>
    )
}

export default OrderConfirmation;
import AllOrdersContainer from "@/components/vendors/Orders/AllOrdersContainer";
import OrderHeader from "@/components/vendors/Orders/OrderHeader";

const VendorOrderPage=()=>{
    return(
        <section className="w-full flex flex-col gap-8 section_padding">
            <OrderHeader/>
            <AllOrdersContainer/>
        </section>
    )
}

export default VendorOrderPage;
import OrderInfoBannerSection from "@/components/order/orderInfo/BannerSection";
import OrderInfoSection from "@/components/order/orderInfo/OrderInfoSection";
import YouMayAlsoLikeSection from "@/components/order/orderInfo/YouMayAlsoLikeSection";

const OrderInfo=()=>{
    return(
        <section className="container flex flex-col gap-11">
        <OrderInfoBannerSection/>
        <OrderInfoSection/>
        <YouMayAlsoLikeSection/>
        </section>
    )
};

export default OrderInfo;
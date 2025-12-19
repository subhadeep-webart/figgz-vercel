import { PUBLIC_IMAGES } from "@/assets";
import BannerSection from "@/components/shared/Banner/BannerSection";

const OrderInfoBannerSection=()=>{
    return(
        <section>
          <BannerSection bgImage={PUBLIC_IMAGES.OrderInfoBannerBg} className="h-[500px]" showOrderInfo={true}/>
        </section>
    )
};

export default OrderInfoBannerSection;
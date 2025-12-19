import SellerProfileBannerSection from "@/components/sellerprofile/BannerSection";
import BestDealsSection from "@/components/sellerprofile/BestDealsSection";
import CollectionSection from "@/components/sellerprofile/CollectionSection";
import EverydayStyleSection from "@/components/sellerprofile/EverydayStyleSection";
import HotPicksSection from "@/components/sellerprofile/HotPicksSection";
import MoreProductSection from "@/components/sellerprofile/MoreProductSection";

const SellerProfile=()=>{
    return(
        <section className="container flex flex-col gap-16">
        <SellerProfileBannerSection/>
        <HotPicksSection/>
        <EverydayStyleSection/>
        <CollectionSection/>
        <BestDealsSection/>
        <MoreProductSection/>
        </section>
    )
};

export default SellerProfile;
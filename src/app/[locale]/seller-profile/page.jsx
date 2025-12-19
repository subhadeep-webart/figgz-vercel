import SellerProfileBannerSection from "@/components/sellerprofile/SellerProfileBannerSection/index.jsx";
import BestDealsSection from "@/components/sellerprofile/BestDealsSection/index.jsx";
import CollectionSection from "@/components/sellerprofile/CollectionSection/index.jsx";
import EverydayStyleSection from "@/components/sellerprofile/EverydayStyleSection/index.jsx";
import HotPicksSection from "@/components/sellerprofile/HotPicksSection/index.jsx";
import MoreProductSection from "@/components/sellerprofile/MoreProductSection/index.jsx";


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
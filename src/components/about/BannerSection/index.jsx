import { PUBLIC_IMAGES } from "@/assets";
import BannerSection from "@/components/shared/Banner/BannerSection";

const AboutBannerSection=()=>{
    return(
        <section>
            <BannerSection bgImage={PUBLIC_IMAGES.AboutUsBannerBg} showAbout={true} title="About Us"/>
        </section>
    )
};

export default AboutBannerSection;
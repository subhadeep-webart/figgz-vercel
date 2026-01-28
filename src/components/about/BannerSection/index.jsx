import { PUBLIC_IMAGES } from "@/assets";
import BannerComponent from "@/components/shared/Banner/BannerComponent";
import AboutBannerContent from "./AboutBannerContent";

const AboutBannerSection = () => {
  return (
    <BannerComponent bgImage={PUBLIC_IMAGES.AboutUsBannerBg}>
      <AboutBannerContent title="About Us" />
    </BannerComponent>
  );
};

export default AboutBannerSection;

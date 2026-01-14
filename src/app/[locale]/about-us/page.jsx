import AboutBannerSection from "@/components/about/BannerSection";
import OurTeamSection from "@/components/about/OurTeamSection";
import OurValuesSection from "@/components/about/OurValuesSection";
import WelcomeToFiggzSection from "@/components/about/WelcomeToFiggzSection";
import WhatWeOfferSection from "@/components/about/WhatWeOfferSection";

const AboutUs = () => {
  return (
    <section className="container flex flex-col gap-8 md:gap-28">
      <AboutBannerSection />
      <WelcomeToFiggzSection />
      <WhatWeOfferSection />
      <OurValuesSection />
      <OurTeamSection />
    </section>
  );
};

export default AboutUs;

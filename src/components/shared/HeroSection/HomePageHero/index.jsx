import HomeLeftHeroSlider from "@/components/ui/Caraousel/BannerSlider/HomeLeftHeroSlider";
import HomeRightHeroSlider from "@/components/ui/Caraousel/BannerSlider/HomeRightHeroSlider";

const HomePageHero = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-7">
        <div className="hidden md:block md:col-span-8">
          <HomeLeftHeroSlider />
        </div>
        <div className=" md:col-span-4">
          <HomeRightHeroSlider />
        </div>
      </div>
    </>
  );
};

export default HomePageHero;

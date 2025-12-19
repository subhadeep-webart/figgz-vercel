import HomeLeftHeroSlider from "@/components/ui/Caraousel/BannerSlider/HomeLeftHeroSlider";
import HomeRightHeroSlider from "@/components/ui/Caraousel/BannerSlider/HomeRightHeroSlider";

const HomePageHero = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-8">
            <HomeLeftHeroSlider />
          </div>
          <div className="col-span-4">
            <HomeRightHeroSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageHero;

import BecomeASellerCard from "@/components/ui/Cards/BecomeASellerCard";
import NewArrivalSection from "@/components/home/NewArrivalSection";
import ShopByCategory from "@/components/home/ShopByCategory";
import HomePageHero from "@/components/shared/HeroSection/HomePageHero";
import MoreProductSection from "@/components/home/MoreProductsSection";
import FashionSection from "@/components/home/FashionSection";
import BrandSection from "@/components/home/BrandSection";

export default function Home() {
      return (
            <section className="flex flex-col gap-14 section_padding">
                  <HomePageHero />
                  <NewArrivalSection headerText={"New Arrivals"} />
                  <ShopByCategory />
                  <MoreProductSection />
                  <FashionSection headerText={`Women's fashion`} />
                  <FashionSection headerText={`Men's fashion`} />
                  <NewArrivalSection headerText={"Mobile Collections"} />
                  <NewArrivalSection headerText={"Baby"} />
                  <BrandSection headerText={"Shop by brands"} />
                  <BrandSection headerText={"Shop by country"} />
                  <FashionSection headerText={`Sports & Outdoors`} />
                  <BecomeASellerCard />
            </section>
      );
}

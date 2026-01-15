import OrderInfoBannerLeft from "@/components/order/orderInfo/BannerSection/OrderInfoBannerLeft";
import OrderInfoBannerRight from "@/components/order/orderInfo/BannerSection/OrderInfoBannerRight";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { cn } from "@heroui/react";

const BannerSection = ({
  bgImage,
  title,
  highlight,
  countries,
  subtitle,
  overlayOpacity = "0.5",
  showAbout = false,
  showSeller = false,
  showOrderInfo = false,
  showDealsAndOfferInfo = false,
  className = "",
}) => {
  return (
    <section
      className={cn(
        "relative w-full h-[231px] md:h-[504px] flex items-end justify-start rounded-4xl",
        className
      )}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div
                className="absolute inset-0 bg-black"
                style={{ opacity: overlayOpacity }}
            ></div> */}

      {showAbout && (
        <div className="relative z-10 text-center !ml-5 !mb-5 md:!ml-20 md:!mb-20">
          <h1 className="text-white text-xl md:text-4xl font-bold mb-2">{title}</h1>
        </div>
      )}

      {showSeller && (
        <div className="flex flex-col max-w-[430px] w-full !mr-24">
          <h1 className="text-white font-bold text-5xl !mb-4">
            {title} <span className="text-secondary">{highlight}</span>
          </h1>

          <div className="!mb-9">
            <h2 className="font-semibold text-base text-white">{subtitle}</h2>
            <h3 className="font-bold text-2xl text-secondary">
              {countries} <span className="text-white">countries</span>
            </h3>
          </div>

          <CustomButton className="w-1/3 bg-banner-btn rounded-3xl text-white text-xs h-10">
            Shop now
          </CustomButton>
        </div>
      )}

      {showOrderInfo && (
        <div className="!px-14 !py-11">
          <div className="grid grid-cols-2 gap-24 ">
            <OrderInfoBannerLeft />
            <OrderInfoBannerRight />
          </div>
        </div>
      )}

      {showDealsAndOfferInfo && (
        <div className="flex flex-col md:flex-row">
          <h4 className="font-normal text-sm md:text-lg text-deals-offer-text-2 md:rotate-90 origin-center md:-translate-x-16 md:-translate-y-14">SAVE UP TO<span className="font-bold text-lg md:text-[28px] text-deals-offer-text-3">70%</span></h4>
          <div className="md:max-w-[446px] w-full">
            <h1 className="font-normal text-base md:text-[43px] text-product-text-base">
              Deals Ending Soon <span className="font-bold">–</span>{" "}
              <span className="font-bold text-secondary">Grab Now!</span>
            </h1>
            <p className="font-medium text-xs md:text-sm !mb-12 text-deals-offer-text">
              Join thousands of businesses selling on Figgz. Reach millions of
              customers and grow your business globally.
            </p>
            <CustomButton className="h-[52px] text-[#000000] font-medium text-xs md:text-sm !px-14">
              Explore Products
            </CustomButton>
          </div>
        </div>

      )}

      
    </section>
  );
};

export default BannerSection;

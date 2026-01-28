import CustomButton from "@/components/ui/Buttons/CustomButton";

const DealsBannerContent = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <h4 className="font-normal text-sm md:text-lg text-deals-offer-text-2 md:rotate-90 origin-center md:-translate-x-16 md:-translate-y-14">
        SAVE UP TO
        <span className="font-bold text-lg md:text-[28px] text-deals-offer-text-3">
          70%
        </span>
      </h4>
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
  );
};

export default DealsBannerContent;

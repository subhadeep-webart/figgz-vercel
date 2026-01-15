import CustomButton from "@/components/ui/Buttons/CustomButton";
import SeasonalWearProductCard from "@/components/ui/Cards/MoreProductSellerCard/SeasonalWearProductCard";


const SeasonalWear = () => {
  return (
    <section className="bg-shopping-cart w-[645px] rounded-2xl !p-8 flex flex-col gap-9">
      <h2 className="font-bold text-base text-foreground">Seasonal Wear</h2>
      <SeasonalWearProductCard/>
      <div className="flex items-center justify-center">
        <CustomButton className="font-semibold text-base w-[246px] h-14">
          Explore More
        </CustomButton>
      </div>
    </section>
  );
};

export default SeasonalWear;

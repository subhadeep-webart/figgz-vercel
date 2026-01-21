import { PUBLIC_IMAGES } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";

const TrackingSection = () => {
  return (
    <div className="flex flex-col gap-8 !mb-9">
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold text-base md:text-lg text-foreground">Order Status</h3>
          <p className="font-normal text-sm md:text-base text-foreground text-nowrap">
            Order ID: #2145788
          </p>
        </div>
        <CustomButton className="md:!px-6 !px-4 text-xs md:text-base bg-dark-slate-blue">
          Tracking ID: #2145788
        </CustomButton>
      </div>
      <img src={PUBLIC_IMAGES.TrackingImg} className="hidden md:block" />
      <img src={PUBLIC_IMAGES.TrackingImgMobile} className=" md:hidden" />
    </div>
  );
};

export default TrackingSection;

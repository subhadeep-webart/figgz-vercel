import VendorAnnouncementCard from "@/components/ui/Cards/VendorAnnouncementCard";
import RewardProgressBar from "./RewardProgressBar";

const TotalRewardContainer = () => {
  return (
    <div>
      <div className="relative">
        <div className="flex items-end justify-end absolute right-[15%] top-[32%] ">
          <div className="bg-invoice-text w-24 h-7 rounded-full text-sm font-semibold text-white flex items-center justify-center ">
            147 Points
          </div>
        </div>
        <VendorAnnouncementCard
          annoucementHeader={"Reward if all items are sold within the month"}
          announcementContent={
            "Vendors will receive a reward when they sell all of their assigned items within the month, encouraging faster and complete stock sales."
          }
          className="!py-14"
        />
      </div>

      <div className="!ml-[5%] !-mt-6 relative z-10">
        <RewardProgressBar totalPoints={1000} remainingPoints={254} />
      </div>
    </div>
  );
};

export default TotalRewardContainer;

import AllRewardContainer from "@/components/vendors/Rewards/AllRewardContainer";
import TotalRewardContainer from "@/components/vendors/Rewards/TotalRewardContainer";

const RewardPage = () => {
  return (
    <section className="w-full flex flex-col gap-8 section_padding">
      <TotalRewardContainer />
      <AllRewardContainer />
    </section>
  );
};

export default RewardPage;

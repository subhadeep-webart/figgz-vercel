import SellerProfileHotPicksCard from "@/components/ui/Cards/SellerProfileHotPicksCard";

const HotPicksSection = () => {
  return (
    <section>
      <h2 className="font-bold text-base text-foreground !mb-11">
        Hot Picks in Every Category
      </h2>
      <div className="flex justify-between">
        <SellerProfileHotPicksCard />
        <SellerProfileHotPicksCard />
        <SellerProfileHotPicksCard />
        <SellerProfileHotPicksCard />
        <SellerProfileHotPicksCard />
        <SellerProfileHotPicksCard />
      </div>
    </section>
  );
};

export default HotPicksSection;

import SellerProfileHotPicksCard from "@/components/ui/Cards/SellerProfileHotPicksCard";


const HotPicksSection = () => {
  return (
    <section>
      <h2 className="font-bold text-base text-foreground !mb-11">
        Hot Picks in Every Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-6">
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

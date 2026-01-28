import { PUBLIC_IMAGES } from "@/assets";
import SellerProfileEverydayCard from "@/components/ui/Cards/SellerProfileEverydayCard";


const EverydayStyleSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-0 lg:grid-cols-3">
    <SellerProfileEverydayCard name="T- shirt" title1="Everyday Comfort," title2="On Sale" description=" Torem ipsum dolor sit amet, consectet." image={PUBLIC_IMAGES.SellerTshirt}/>
    <SellerProfileEverydayCard name="Shoe" title1="Everyday Comfort," title2="On Sale" description=" Torem ipsum dolor sit amet, consectet." image={PUBLIC_IMAGES.SellerShoe}/>
    <SellerProfileEverydayCard name="Bags" title1="Everyday Comfort," title2="On Sale" description=" Torem ipsum dolor sit amet, consectet." image={PUBLIC_IMAGES.SellerBagpack}/>
    </section>
  );
};

export default EverydayStyleSection;

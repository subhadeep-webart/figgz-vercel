import { PUBLIC_IMAGES } from "@/assets";
import SellerProfileEverydayCard from "@/components/ui/Cards/SellerProfileEverydayCard";

const EverydayStyleSection = () => {
  return (
    <section className="flex justify-between">
    <SellerProfileEverydayCard name="T- shirt" title1="Everyday Comfort," title2="On Sale" description=" Torem ipsum dolor sit amet, consectet." image={PUBLIC_IMAGES.SellerTshirt}/>
    <SellerProfileEverydayCard name="Shoe" title1="Everyday Comfort," title2="On Sale" description=" Torem ipsum dolor sit amet, consectet." image={PUBLIC_IMAGES.SellerShoe}/>
    <SellerProfileEverydayCard name="Bags" title1="Everyday Comfort," title2="On Sale" description=" Torem ipsum dolor sit amet, consectet." image={PUBLIC_IMAGES.SellerBagpack}/>
    </section>
  );
};

export default EverydayStyleSection;

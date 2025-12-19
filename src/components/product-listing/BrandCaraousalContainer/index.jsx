import MoreProductContainerHeader from "@/components/home/MoreProductsSection/MoreProductContainerHeader";
import BrandsCard from "@/components/ui/Cards/BrandsCard";

const BrandCaraousalContainer = () => {
    return (
        <section className="w-full">
            <MoreProductContainerHeader headerText={"Shop By Brand"} />
            <div className="grid grid-cols-6 gap-7 !pb-12 !pt-3.5">
            <BrandsCard/>
            <BrandsCard/>
            <BrandsCard/>
            <BrandsCard/>
            <BrandsCard/>
            <BrandsCard/>
            </div>
        </section>
    )
}

export default BrandCaraousalContainer;
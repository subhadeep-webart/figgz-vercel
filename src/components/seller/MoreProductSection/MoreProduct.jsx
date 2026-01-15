import MoreProductContainerSeller from "./MoreProductContainerSeller";
import SeasonalWear from "./SeasonalWear";


const MoreProduct = () => {
    return (
        <section className="grid grid-cols-12 gap-7 !mb-28">
            <div className="col-span-6">
                <MoreProductContainerSeller />
            </div>
            <div className="col-span-6">
                <SeasonalWear />
            </div>
        </section>
    )
};

export default MoreProduct;
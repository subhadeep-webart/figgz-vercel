import DealProductList from "./DealProductList";
import InFocusProductList from "./InFocusProductList";
import MoreProductList from "./MoreProductList";

const MoreProductSection = () => {
    return (
        <section className="w-full grid grid-cols-3 gap-7 container">
           <MoreProductList/>
           <DealProductList/>
           <InFocusProductList/>
        </section>
    )
}

export default MoreProductSection;
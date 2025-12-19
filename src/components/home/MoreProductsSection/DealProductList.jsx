import BestDealsCard from "@/components/ui/Cards/BestDealsCard";
import MoreProductContainer from "./MoreProductContainer";
const DealProductList = () => {
    return (
        <MoreProductContainer headerText={"With best deals"}>
            <BestDealsCard />
            <BestDealsCard />
            <BestDealsCard />
            <BestDealsCard />
        </MoreProductContainer>
    )
}

export default DealProductList;
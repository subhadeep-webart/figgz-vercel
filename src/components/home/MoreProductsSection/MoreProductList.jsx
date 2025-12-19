import MoreProductCard from "@/components/ui/Cards/MoreProductCard";
import MoreProductContainer from "./MoreProductContainer";

const MoreProductList = () => {
    return (
        <MoreProductContainer headerText={"Shop our more products"}>
            <MoreProductCard />
            <MoreProductCard />
            <MoreProductCard />
            <MoreProductCard />
        </MoreProductContainer>
    )
}

export default MoreProductList;
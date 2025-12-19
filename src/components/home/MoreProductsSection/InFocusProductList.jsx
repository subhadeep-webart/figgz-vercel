import InFocusCard from "@/components/ui/Cards/InFocusCard";
import MoreProductContainer from "./MoreProductContainer";

const InFocusProductList = () => {
    return (
        <MoreProductContainer headerText={"Shop our more products"}>
            <InFocusCard/>
            <InFocusCard/>
            <InFocusCard/>
            <InFocusCard/>
        </MoreProductContainer>
    )
}

export default InFocusProductList;
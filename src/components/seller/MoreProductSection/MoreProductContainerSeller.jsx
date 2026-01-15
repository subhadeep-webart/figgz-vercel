import MoreProductContainer from "@/components/home/MoreProductsSection/MoreProductContainer";
import MoreProductSellerCard from "@/components/ui/Cards/MoreProductSellerCard";


const MoreProductContainerSeller=()=>{
    return(
        <MoreProductContainer headerText={"Shop our more products"}>
           <MoreProductSellerCard />
            <MoreProductSellerCard />
            <MoreProductSellerCard />
            <MoreProductSellerCard />
        </MoreProductContainer>
    )
};

export default MoreProductContainerSeller;
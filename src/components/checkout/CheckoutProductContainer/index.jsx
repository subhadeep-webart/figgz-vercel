import ShoppingCartCard from "@/components/ui/Cards/ShoppingCartCard";

const CheckoutProductContainer = () => {
    return (
        <div className="w-full flex flex-col justify-start items-start gap-4 !py-5">
            <ShoppingCartCard />
            <ShoppingCartCard />
            <ShoppingCartCard />
        </div>
    )
}

export default CheckoutProductContainer;
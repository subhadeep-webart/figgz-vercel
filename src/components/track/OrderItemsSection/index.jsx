import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import SingleImageCard from "@/components/ui/Cards/SingleImageCard";
import OrderItemCard from "./OrderItemCard";

const OrderItemsSection = () => {
  return (
    <div>
      <h3 className="font-bold text-lg text-foreground">
        Items from Your Orders
      </h3>

    <OrderItemCard/>
    <OrderItemCard/>
    <OrderItemCard/>
    </div>
  );
};

export default OrderItemsSection;

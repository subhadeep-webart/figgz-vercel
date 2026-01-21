
import OrderItemCard from "./OrderItemCard";

const OrderItemsSection = () => {
  return (
    <div>
      <h3 className="font-bold text-base md:text-lg text-foreground">
        Items from Your Orders
      </h3>

    <OrderItemCard/>
    <OrderItemCard/>
    <OrderItemCard/>
    </div>
  );
};

export default OrderItemsSection;


import Comments from "./Comments";
import DeliverySummary from "./DeliverySummary";
import OrderDetails from "./OrderDetails";
import OrderInfos from "./OrderInfos";

const OrderInfoSection = () => {
  return (
    <section >
        <div className="!pt-9 !pb-11 !px-14 border border-order-info-border rounded-3xl">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
        <OrderInfos />
        </div>
        <div className="col-span-5">
        <OrderDetails />
        </div>
        <div className="col-span-4">
        <DeliverySummary />
        </div>
      </div>
      </div>
      <Comments/>
    </section>
  );
};

export default OrderInfoSection;

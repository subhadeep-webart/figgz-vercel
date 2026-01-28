import Comments from "./Comments";
import DeliverySummary from "./DeliverySummary";
import OrderDetails from "./OrderDetails";
import OrderInfos from "./OrderInfos";

const OrderInfoSection = () => {
  return (
    <section>
      <div className="md:!pt-9 md:!pb-11 md:!px-14 !p-6 border border-order-info-border rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <OrderInfos />
          </div>
          <div className="md:col-span-5">
            <OrderDetails />
          </div>
          <div className="md:col-span-4 hidden md:block">
            <DeliverySummary />
          </div>
        </div>
      </div>
      <div className="md:hidden !mt-4">
        <DeliverySummary />
      </div>
      <Comments />
    </section>
  );
};

export default OrderInfoSection;

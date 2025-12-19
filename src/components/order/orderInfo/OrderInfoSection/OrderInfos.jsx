const OrderInfos = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-semibold text-[32px] text-foreground">
        Order Info
      </h3>
      <div className="flex flex-col gap-2">
        <span className="font-medium text-lg text-secondary">
          Delivery Address
        </span>
        <p className="font-medium text-base text-order-infos-text">
          Rahul Sharma Flat No. 202, Green Heights Apartments Sector 14, Near
          City Mall Andheri East, Mumbai – 400069 Maharashtra, India{" "}
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <h4 className="font-medium text-lg text-secondary">Shipping Name</h4>
        <span className="font-medium text-base text-order-infos-text">
          Jonathan Sharma
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <h4 className="font-medium text-lg text-secondary">Order Status</h4>
        <span className="font-medium text-base text-green-default">
          Out For Delivery
        </span>
      </div>
    </div>
  );
};

export default OrderInfos;

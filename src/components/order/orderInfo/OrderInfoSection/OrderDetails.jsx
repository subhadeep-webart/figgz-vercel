import CustomChip from "@/components/ui/CustomChip";

const OrderDetails = () => {
  return (
    <div>
      <div className="border border-order-info-border rounded-[18px] w-full !p-7">
        <div className="flex justify-between items-center !mb-7">
          <h3 className="font-medium text-xl text-secondary">Order Details</h3>
          <span className="font-semibold text-lg text-foreground">
            #8745584
          </span>
        </div>
        <div className="flex flex-col gap-5">
        <h4 className="font-medium text-lg text-order-infos-text">
          Order Placed:{" "}
          <span className="text-foreground"> 9 Aug 2025 at 10:25Am</span>
        </h4>
        <h4 className="font-medium text-lg text-order-infos-text">
          Order Number:{" "}
          <span className="text-foreground"> 96-854157-968488</span>
        </h4>
        <h4 className="font-medium text-lg text-order-infos-text">
          Payment Method: <span className="text-foreground"> Credit Card</span>
        </h4>

        <CustomChip
          className=" border-1 border-primary h-10 !px-8 rounded-full text-lg font-medium text-product-text-base"
          variant="bordered"
        >
          **** **** **** 2547
        </CustomChip>

        <h4 className="font-medium text-lg text-order-infos-text">
          Transection: <span className="text-foreground">#874559845</span>
        </h4>
        <h4 className="font-medium text-lg text-order-infos-text">
          {" "}
          Seller: <span className="text-foreground"> Zudio Sparks</span>
        </h4>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

import CustomChip from "@/components/ui/CustomChip";

const OrderDetails = () => {
  return (
    <div>
      <div className="md:border md:border-order-info-border md:rounded-[18px] w-full md:!p-7 flex flex-col gap-4">
        <div className="flex justify-between items-center gap-7">
          <h3 className="font-medium text-sm md:text-xl text-secondary">Order Details</h3>
          <span className="font-semibold text-lg text-foreground hidden md:block">
            #8745584
          </span>
        </div>
        <div className="flex flex-col gap-5">
        <h4 className="font-medium text-sm md:text-lg text-order-infos-text">
          Order Placed:{" "}
          <span className="text-foreground"> 9 Aug 2025 at 10:25Am</span>
        </h4>
        <h4 className="font-medium text-sm md:text-lg text-order-infos-text">
          Order Number:{" "}
          <span className="text-foreground"> 96-854157-968488</span>
        </h4>
        <h4 className="font-medium text-sm md:text-lg text-order-infos-text">
          Payment Method: <span className="text-foreground"> Credit Card</span>
        </h4>

        <CustomChip
          className=" border-1 border-primary h-10 md:!px-8 !px-4 rounded-full text-sm md:text-lg font-medium text-product-text-base"
          variant="bordered"
        >
          **** **** **** 2547
        </CustomChip>

        <h4 className="font-medium text-sm md:text-lg text-order-infos-text">
          Transection: <span className="text-foreground">#874559845</span>
        </h4>
        <h4 className="font-medium text-sm md:text-lg text-order-infos-text">
          {" "}
          Seller: <span className="text-foreground"> Zudio Sparks</span>
        </h4>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

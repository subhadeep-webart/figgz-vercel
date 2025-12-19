import CustomChip from "@/components/ui/CustomChip";
import { Divider } from "@heroui/react";

const DeliverySummary = () => {
  return (
    <div>
      <div className="bg-shopping-cart rounded-[18px] w-full !p-7">
        <h3 className="font-medium text-xl text-secondary !mb-9">
          Delivery Summary
        </h3>
        <div className="flex flex-col gap-3 !mb-7">
          <div className="flex justify-between items-center">
            <h4 className="font-normal text-lg text-order-infos-text">
              Item’s Subtotal
            </h4>
            <span className="font-medium text-lg text-foreground">$9854</span>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="font-normal text-lg text-order-infos-text">
              Shipping:
            </h4>
            <span className="font-medium text-lg text-foreground">$50</span>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="font-normal text-lg text-order-infos-text">
              Total:
            </h4>
            <span className="font-medium text-lg text-foreground">$50</span>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="font-normal text-lg text-order-infos-text">
              Promotional Applied:
            </h4>
            <span className="font-medium text-lg text-foreground">-$50</span>
          </div>
          <Divider />
          <div className="flex justify-between items-center">
            <h4 className="font-normal text-lg text-foreground">Grand Total</h4>
            <span className="font-medium text-lg text-foreground">$9820</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <CustomChip
          className=" border-1 border-secondary h-12 !px-8 rounded-full text-lg font-medium text-product-text-base"
          variant="bordered"
        >
        <span className="underline">Download Invoice</span> 
        </CustomChip>
        </div>
      </div>
    </div>
  );
};

export default DeliverySummary;

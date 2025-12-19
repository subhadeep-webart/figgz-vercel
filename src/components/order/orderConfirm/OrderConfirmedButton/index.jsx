import CustomChip from "@/components/ui/CustomChip";

const OrderConfirmedButton = () => {
  return (
    <div className="flex justify-center items-center">
      <CustomChip
        className="text-secondary border-1 border-secondary h-14 !px-11 font-semibold"
        variant="bordered"
      >
        Continue Shopping
      </CustomChip>
    </div>
  );
};

export default OrderConfirmedButton;

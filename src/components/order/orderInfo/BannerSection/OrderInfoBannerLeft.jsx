import CustomButton from "@/components/ui/Buttons/CustomButton";
import CustomChip from "@/components/ui/CustomChip";

const OrderInfoBannerLeft = () => {
  return (
    <div className="flex flex-col justify-center items-start">
      <span className="font-normal text-base text-order-banner-text !mb-3">
        Order ID: #2145788
      </span>
      <div className="!mb-5">
        <h2 className="font-semibold text-[27px] text-white">
          Adidas Terrex AX4 Mid Gore-TEX Hiking Shoes Women’s, Black, Size 8
        </h2>
        <p className="font-normal text-lg text-order-banner-text-2">
          Vorem ipsum dolor sit amet, consectetur adipiscing .
        </p>
      </div>
      <div className="flex gap-2 !mb-8">
        <span className="font-normal text-xl text-order-banner-text-3">
          $29.00
        </span>
        <span className="font-bold text-xl text-order-banner-text-4">
          $20.00
        </span>
      </div>
      <div className="flex gap-6 ">
        <CustomButton className="text-[#000000] font-medium text-base !px-20 h-[60px]">
          Buy It Again
        </CustomButton>
        <CustomChip
          className="text-white border-1 border-white h-[60px] !px-16"
          variant="bordered"
        >
          Return
        </CustomChip>
      </div>
    </div>
  );
};
export default OrderInfoBannerLeft;

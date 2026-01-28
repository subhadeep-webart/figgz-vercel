import CustomButton from "@/components/ui/Buttons/CustomButton";
import CustomChip from "@/components/ui/CustomChip";

const OrderInfoBannerLeft = () => {
  return (
    <div className="flex flex-col gap-6 justify-center md:items-start items-center">
      <span className="font-normal text-xs md:text-base text-order-banner-text ">
        Order ID: #2145788
      </span>
      <div className="text-center md:text-start">
        <h2 className="font-semibold text-xl md:text-[27px] text-white">
          Adidas Terrex AX4 Mid Gore-TEX Hiking Shoes Women’s, Black, Size 8
        </h2>
        <p className="font-normal text-xs md:text-lg text-order-banner-text-2">
          Vorem ipsum dolor sit amet, consectetur adipiscing .
        </p>
      </div>
      <div className="flex gap-2">
        <span className="font-normal text-base md:text-xl text-order-banner-text-3">
          $29.00
        </span>
        <span className="font-bold  text-base md:text-xl text-order-banner-text-4">
          $20.00
        </span>
      </div>
      <div className="flex md:gap-6 gap-2">
        <CustomButton className="text-[#000000] font-medium text-xs md:text-base md:!px-20 md:h-[60px] !px-5 h-[40px]">
          Buy It Again
        </CustomButton>
        <CustomChip
          className="text-white border-1 border-white md:h-[60px] md:!px-16 !px-5 h-[40px] text-xs md:text-base"
          variant="bordered"
        >
          Return
        </CustomChip>
      </div>
    </div>
  );
};
export default OrderInfoBannerLeft;

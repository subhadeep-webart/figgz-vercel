import CustomButton from "@/components/ui/Buttons/CustomButton";
import SingleImageCard from "@/components/ui/Cards/SingleImageCard";

const OrderItemCard=()=>{
    return(
          <div className="!py-2.5">
        <div className="w-full md:!px-8 !px-2 !py-3.5 border border-image-wrapper bg-shopping-cart rounded-2xl flex flex-col gap-2 md:gap-0 md:flex-row justify-between items-center">
          <div className="flex md:gap-6 gap-3 items-center">
            <SingleImageCard
              className="md:h-36 md:w-44 w-24 h-32 bg-white flex-shrink-0"
              imageWrapperClass="h-32 w-20"
              imageClass="h-32 w-20"
            />
            <div className="flex flex-col md:gap-3 gap-1">
              <p className="font-medium text-xs md:text-lg text-product-text-base line-clamp-1 md:line-clamp-none">
                Adidas Terrex AX4 Mid Gore-TEX Hiking Shoes Women’s, Black, Size
                8
              </p>
              <span className="font-normal text-[11px] md:text-base text-product-text-info">
                Vorem ipsum dolor sit amet, consectetur adipiscing .
              </span>
               <p className="font-normal text-xs text-product-text-base md:hidden">
              {" "}
              Delivery Date: <span className="font-semibold text-steel-blue">24 april</span>{" "}
            </p>
              <span className="text-[10px] md:text-base font-normal text-burnt-orange">
                Order ID: #2145788
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-9">
            <CustomButton className="text-neutral-gray md:!px-14 !px-20 border border-neutral-gray bg-transparent text-xs md:text-base">
              Track
            </CustomButton>
            <p className="font-normal text-lg text-product-text-base hidden md:block">
              {" "}
              Delivery Date: <span className="font-semibold text-steel-blue">24 april</span>{" "}
            </p>
          </div>
        </div>
      </div>
    )
};

export default OrderItemCard;
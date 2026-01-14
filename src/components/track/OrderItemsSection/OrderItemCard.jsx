import CustomButton from "@/components/ui/Buttons/CustomButton";
import SingleImageCard from "@/components/ui/Cards/SingleImageCard";

const OrderItemCard=()=>{
    return(
          <div className=" !py-2.5">
        <div className="w-full !px-8 !py-3.5 border border-image-wrapper bg-shopping-cart rounded-2xl flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <SingleImageCard
              className="h-36 w-44 bg-white flex-shrink-0"
              imageWrapperClass="h-32"
              imageClass="h-32"
            />
            <div className="flex flex-col gap-3">
              <p className="font-medium text-lg text-product-text-base">
                Adidas Terrex AX4 Mid Gore-TEX Hiking Shoes Women’s, Black, Size
                8
              </p>
              <span className="font-normal text-base text-product-text-info">
                Vorem ipsum dolor sit amet, consectetur adipiscing .
              </span>
              <span className="text-base font-normal text-burnt-orange">
                Order ID: #2145788
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-9">
            <CustomButton className="text-neutral-gray !px-14 border border-neutral-gray bg-transparent">
              Track
            </CustomButton>
            <p className="font-normal text-lg text-product-text-base">
              {" "}
              Delivery Date: <span className="font-semibold text-steel-blue">24 april</span>{" "}
            </p>
          </div>
        </div>
      </div>
    )
};

export default OrderItemCard;
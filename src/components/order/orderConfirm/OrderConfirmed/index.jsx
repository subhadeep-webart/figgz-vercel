import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const OrderConfirmed = () => {
  return (
  
     <div className="px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col justify-center items-center gap-7">

        <div className="w-full max-w-[365px] sm:max-w-[365px] h-[200px] sm:h-[308px] relative">
          <Image
            src={PUBLIC_IMAGES.OrderConfirmed}
            alt="Confirmed"
            fill
            className="w-full h-full object-contain"
          />
        </div>

        <div className="w-full max-w-[771px] flex flex-col justify-center items-center gap-3 text-center px-2 sm:px-0">
          <h1 className="font-semibold text-[22px] sm:text-[27px] text-foreground">
            Thank You! Your Order is <span className="font-bold">Confirmed</span>
          </h1>
          <p className="font-normal text-base sm:text-lg text-product-text-info">
            Vorem ipsum dolor sit amet, consectetur adipiscing m dolor sit amet, consectetur adipiscingm dolor sit amet, consectetur adipiscing.
          </p>
        </div>
      </div>
    </div>
  )
};

export default OrderConfirmed;
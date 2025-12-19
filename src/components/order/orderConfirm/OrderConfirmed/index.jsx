import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const OrderConfirmed = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-7">
        <div className="w-[365px] h-[308px] relative">
          <Image
            src={PUBLIC_IMAGES.OrderConfirmed}
            alt="Confirmed"
            fill
            className="w-full h-full object-contain"
          />
        </div>
        <div className="max-w-[771px] w-full flex flex-col justify-center items-center gap-3">
          <h1 className="font-semibold text-[27px] text-foreground">Thank You! Your Order is <span className="font-bold">Confirmed</span></h1>
          <p className="font-normal text-lg text-product-text-info text-center">Vorem ipsum dolor sit amet, consectetur adipiscing m dolor sit amet, consectetur adipiscingm dolor sit amet, consectetur adipiscing.</p>
        </div>
      </div>
    </div>
  )
};

export default OrderConfirmed;
import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";


const BestDealsSection=()=>{
    return(
        <section className="flex gap-9">
       <div className="w-[934px] h-[506px] relative rounded-2xl hidden md:block">
              <Image
                src={PUBLIC_IMAGES.SellerBestDeal}
                alt="Color 1 image"
                fill
                className="w-full h-full object-contain"
              />
            </div>
             <div className="w-[351px] h-[506px] relative rounded-2xl">
              <Image
                src={PUBLIC_IMAGES.SellerBestDeal2}
                alt="Color 1 image"
                fill
                className="w-full h-full object-contain"
              />
            </div>
        </section>
    )
};

export default BestDealsSection;
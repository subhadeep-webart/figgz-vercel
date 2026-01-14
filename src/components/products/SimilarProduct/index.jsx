"use client"
import SimilarProductCard from "./SimilarProductCard";
import SimilarProductSlider from "./SimilarProductSlider";
import { useRef } from "react";

const SimilarProduct = () => {
 const prevRef = useRef(null);
        const nextRef = useRef(null);
        const swiperRef = useRef(null);

  return (
    <aside className="w-[1/4] lg:flex flex-col gap-3 h-full hidden">
      <SimilarProductSlider prevRef={prevRef} nextRef={nextRef} swiperRef={swiperRef}/>
      <div className="flex flex-col gap-9">
        <SimilarProductCard />
        <SimilarProductCard />
      </div>
       
    </aside>
  );
};

export default SimilarProduct;

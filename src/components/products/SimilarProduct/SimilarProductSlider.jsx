"use client"

import ProductSliderNavigation from "@/components/ui/Caraousel/ProductSlider/ProductSliderNavigation";

const SimilarProductSlider=({prevRef, nextRef, swiperRef})=>{
   
        const handlePrevClick = () => {
            if (swiperRef) {
                swiperRef.current?.slidePrev();
            }
        }
    
        const handleNextClick = () => {
            if (swiperRef) {
                swiperRef.current?.slideNext();
            }
        }

    return(
        <>
        <div className="flex items-center justify-between">
                <p className="font-bold text-lg text-foreground">From Other Sellers</p>

                <div className="flex gap-2">
                    <ProductSliderNavigation
                        prevRef={prevRef}
                        nextRef={nextRef}
                        onPrevClick={handlePrevClick}
                        onNextClick={handleNextClick}
                        rightButtonStyle={"min-h-7 h-7 min-w-7 !w-7"}
                        leftButtonStyle={"min-h-7 h-7 min-w-7 !w-7"} 
                    />
                </div>

            </div>
        </>
    )
};

export default SimilarProductSlider;
"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CaraousalNavigation from "../CaraousalNavigation";
import CategoryNavTab from "@/components/shared/CategoryNavMenu/CategoryNavTab";

const CategoryNavSlider = ({
    data = [],
    onDropdownOpen
}) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);

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

    return (
        <div className="relative group">
            <Swiper
                modules={[Navigation]}
                spaceBetween={8}
                slidesPerView="auto"
                loop={false}
                speed={600}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                onReachBeginning={() => setShowPrev(false)}
                onReachEnd={() => setShowNext(false)}
                onFromEdge={() => {
                    setShowPrev(true);
                    setShowNext(true);
                }}
                className="category_navigation_slider_wrapper"
            >
                {data?.map((item, index) => (
                    <SwiperSlide key={index} className="auto_slide">
                        <CategoryNavTab navTitle={item}  onOpenChange={onDropdownOpen}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <CaraousalNavigation
                prevRef={prevRef}
                nextRef={nextRef}
                onPrevClick={handlePrevClick}
                onNextClick={handleNextClick}
                buttonStyle="border-none !bg-transparent shadow-none"
                showPrev={showPrev}
                showNext={showNext}
            />
        </div>
    );
};

export default CategoryNavSlider;

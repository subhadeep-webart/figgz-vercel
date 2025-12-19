"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function ProductGallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="w-1/4 h-full flex flex-col gap-4">
            <Swiper
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="product_gallery w-full h-[499px]"
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={`https://swiperjs.com/demos/images/nature-${i}.jpg`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="mySwiper w-full h-[120px]"
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                    <SwiperSlide key={i}>
                        <img
                            src={`https://swiperjs.com/demos/images/nature-${i}.jpg`}
                            className="w-full h-full object-cover rounded-md cursor-pointer"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

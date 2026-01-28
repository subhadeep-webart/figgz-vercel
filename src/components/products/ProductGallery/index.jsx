// "use client";

// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// import { FreeMode, Thumbs } from "swiper/modules";
// import ProductDescription from "../ProuctDetails/ProductDescription";

// export default function ProductGallery({ setZoomState }) {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
//   const [hovering, setHovering] = useState(false);

//   const lensSize = 100;

//   return (
//     <div className="lg:w-1/4 w-full h-full flex flex-col gap-4 relative">
//       <div className="lg:hidden">
//         <ProductDescription />
//       </div>

//       <Swiper
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Thumbs]}
//         className="product_gallery w-full h-[499px] relative"
//       >
//         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
//           <SwiperSlide key={i}>
//             <div
//               className="relative w-full h-full cursor-none"
//               onMouseEnter={(e) => {
//                 setHovering(true);
//                 setZoomState({
//                   visible: true,
//                   image: `https://swiperjs.com/demos/images/nature-${i}.jpg`,
//                   position: { x: 50, y: 50 },
//                 });
//               }}
//               onMouseLeave={() => {
//                 setHovering(false);
//                 setZoomState({
//                   visible: false,
//                   image: "",
//                   position: { x: 50, y: 50 },
//                 });
//               }}
//               onMouseMove={(e) => {
//                 const rect = e.currentTarget.getBoundingClientRect();
//                 const x = ((e.clientX - rect.left) / rect.width) * 100;
//                 const y = ((e.clientY - rect.top) / rect.height) * 100;

//                 setLensPosition({
//                   x: e.clientX - rect.left - lensSize / 2,
//                   y: e.clientY - rect.top - lensSize / 2,
//                 });

//                 setZoomState((prev) => ({
//                   ...prev,
//                   position: { x, y },
//                 }));
//               }}
//             >
//               <img
//                 src={`https://swiperjs.com/demos/images/nature-${i}.jpg`}
//                 className="w-full h-full object-cover rounded-lg"
//                 alt=""
//               />

//               {hovering && (
//                 <div
//                   className="absolute flex justify-center items-center text-white bg-white/10 backdrop-blur-[1px]"
//                   style={{
//                     width: `${lensSize}px`,
//                     height: `${lensSize}px`,
//                     left: `${lensPosition.x}px`,
//                     top: `${lensPosition.y}px`,
//                     pointerEvents: "none",
//                   }}
//                 >
//                   <span className="text-3xl font-normal text-black">+</span>
//                 </div>
//               )}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <Swiper
//         onSwiper={setThumbsSwiper}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Thumbs]}
//         className="mySwiper w-full h-[120px]"
//       >
//         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
//           <SwiperSlide key={i}>
//             <img
//               src={`https://swiperjs.com/demos/images/nature-${i}.jpg`}
//               className="w-full h-full object-cover rounded-md cursor-pointer"
//               alt=""
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Thumbs } from "swiper/modules";
import ProductDescription from "../ProuctDetails/ProductDescription";

export default function ProductGallery({ setZoomState }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const lensSize = 100;

  const images = [
    "/images/products/laptop-img.jpg",
    "/images/products/phone.jpg",
    "/images/products/shirts.jpg",
    "/images/products/laptop-img.jpg",
    "/images/products/phone.jpg",
    "/images/products/shirts.jpg",
  ];

  return (
    <div className="lg:w-1/4 w-full h-full flex flex-col gap-4 relative">
      <div className="lg:hidden">
        <ProductDescription />
      </div>

      <Swiper
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="product_gallery w-full h-[499px] relative"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full cursor-none"
              onMouseEnter={() => {
                setHovering(true);
                setZoomState({
                  visible: true,
                  image: img,
                  position: { x: 50, y: 50 },
                });
              }}
              onMouseLeave={() => {
                setHovering(false);
                setZoomState({
                  visible: false,
                  image: "",
                  position: { x: 50, y: 50 },
                });
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;

                setLensPosition({
                  x: e.clientX - rect.left - lensSize / 2,
                  y: e.clientY - rect.top - lensSize / 2,
                });

                setZoomState((prev) => ({
                  ...prev,
                  position: { x, y },
                }));
              }}
            >
              <img
                src={img}
                className="w-full h-full object-contain rounded-lg"
                alt=""
              />

              {hovering && (
                <div
                  className="absolute flex justify-center items-center text-white bg-white/10 backdrop-blur-[1px]"
                  style={{
                    width: `${lensSize}px`,
                    height: `${lensSize}px`,
                    left: `${lensPosition.x}px`,
                    top: `${lensPosition.y}px`,
                    pointerEvents: "none",
                  }}
                >
                  <span className="text-3xl font-normal text-black">+</span>
                </div>
              )}
            </div>
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
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              className="w-full h-full object-contain rounded-md cursor-pointer"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

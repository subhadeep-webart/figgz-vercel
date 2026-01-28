"use client";
import { useState } from "react";
import ProductDetailsContainerWrapper from "../ProductDetailsContainerWrapper.jsx/index.jsx";
import AdvertisementCard from "../ProductDetailsDescriptionSection/AdvertisementCard.jsx";
import ProductDetailsDescriptionSection from "../ProductDetailsDescriptionSection/index.jsx";
import ProductGallery from "../ProductGallery/index.jsx";
import ProductsForYou from "../ProductsForYou/index.jsx";
import ProductDetails from "../ProuctDetails/index.jsx";
import SimilarProduct from "../SimilarProduct/index.jsx";

const ProductDetailsSectionContainer = () => {
  const [zoomState, setZoomState] = useState({
    visible: false,
    image: "",
    position: { x: 50, y: 50 },
  });
  return (
    <>
      <ProductDetailsContainerWrapper className="relative">
        <ProductGallery setZoomState={setZoomState} />
        <ProductDetails />
        <SimilarProduct />

        {zoomState.visible && (
          <div className="hidden lg:flex absolute top-0 right-0 z-50 w-[60vw] h-full pointer-events-none">
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-lg"></div>

            <div
              className="relative w-full h-[70vh] border border-white rounded-md"
              style={{
                backgroundImage: `url(${zoomState.image})`,
                backgroundPosition: `${zoomState.position.x}% ${zoomState.position.y}%`,
                backgroundSize: "200%",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        )}
      </ProductDetailsContainerWrapper>
      <ProductDetailsContainerWrapper>
        <ProductDetailsDescriptionSection />
        <AdvertisementCard />
      </ProductDetailsContainerWrapper>
      <ProductDetailsContainerWrapper>
        <ProductsForYou />
      </ProductDetailsContainerWrapper>
    </>
  );
};

export default ProductDetailsSectionContainer;

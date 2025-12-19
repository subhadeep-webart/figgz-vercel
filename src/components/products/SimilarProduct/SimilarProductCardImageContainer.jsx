"use client";
import BestSellerBadge from "@/components/shared/Badge/BestSellerBadge";
import CartButton from "@/components/shared/Button/CartButton";
import WishlistButton from "@/components/shared/Button/WishlistButton";
import ImageWrapper from "@/components/shared/Wrapper/ImageWrapper";
import ProductImageViewer from "@/components/ui/Cards/ProductCard/ProductImageViewer";
import SimilarProductDetails from "./SimilarProductDetailsContainer";

const SimilarProductCardImageContainer = () => {
  return (
    <>
      <div
        className="border-1 border-image-wrapper rounded-2xl similar_product_bg_gradient h-full"
      >
        <ImageWrapper
          className={"w-full h-48 flex justify-center items-center border-0"}
        >
          {/* <div className="absolute top-2.5 left-2.5">
            <BestSellerBadge className={"bg-secondary"} />
          </div> */}
          <div className="absolute top-2.5 right-2.5">
            <WishlistButton
              className={"bg-white h-7 min-w-7 w-7 border-border-icon border-1"}
            />
          </div>
          <ProductImageViewer />
          <div className="absolute bottom-8 right-2.5">
            <CartButton
              className={"bg-white h-7 min-w-7 w-7 border-border-icon border-1"}
            />
          </div>
        </ImageWrapper>
        <SimilarProductDetails />
      </div>
    </>
  );
};

export default SimilarProductCardImageContainer;

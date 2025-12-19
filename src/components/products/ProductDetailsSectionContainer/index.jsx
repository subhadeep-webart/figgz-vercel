"use client"
import ProductDetailsContainerWrapper from "../ProductDetailsContainerWrapper.jsx/index.jsx";
import AdvertisementCard from "../ProductDetailsDescriptionSection/AdvertisementCard.jsx";
import ProductDetailsDescriptionSection from "../ProductDetailsDescriptionSection/index.jsx";
import ProductGallery from "../ProductGallery/index.jsx";
import ProductsForYou from "../ProductsForYou/index.jsx";
import ProductDetails from "../ProuctDetails/index.jsx";
import SimilarProduct from "../SimilarProduct/index.jsx";

const ProductDetailsSectionContainer = () => {
    return (
        <>
            <ProductDetailsContainerWrapper>
                <ProductGallery />
                <ProductDetails />
                <SimilarProduct />
            </ProductDetailsContainerWrapper>
            <ProductDetailsContainerWrapper>
                <ProductDetailsDescriptionSection />
                <AdvertisementCard />
            </ProductDetailsContainerWrapper>
            <ProductDetailsContainerWrapper>
                <ProductsForYou />
            </ProductDetailsContainerWrapper>
        </>
    )
}

export default ProductDetailsSectionContainer;
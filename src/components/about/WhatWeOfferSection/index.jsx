import ProductCatalogSectionWrapper from "@/components/shared/Wrapper/ProductCatalogSectionWrapper";
import WhatWeOfferList from "./WhatWeOfferList";

const WhatWeOfferSection = () => {
  return (
    <section>
      <ProductCatalogSectionWrapper
        id="what_we_offer"
        headerText="What We Offer"
        subText="We carefully curate our collections to ensure each product meets our high standards. Our categories include"
        showSubText={true}
        headerClassName="font-bold text-lg md:text-4xl text-forground"
        buttonClassName="min-h-7 h-7 bg-transparent underline text-secondary text-lg hidden md:block"
      >
        <WhatWeOfferList />
      </ProductCatalogSectionWrapper>
    </section>
  );
};

export default WhatWeOfferSection;

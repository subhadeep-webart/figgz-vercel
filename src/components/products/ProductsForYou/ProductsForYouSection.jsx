"use client";

import ProductsForYouCard from "./ProductsForYouCard";

const ProductsForYouSection = () => {
  return (
    <div>
     <h3 className="font-bold text-lg text-foreground !mb-7">Similar Items</h3>
       <div className="grid grid-cols-2 lg:grid-cols-4 gap-9">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductsForYouCard key={i} />
          ))}
          </div>
       
     
    </div>
  );
};

export default ProductsForYouSection;

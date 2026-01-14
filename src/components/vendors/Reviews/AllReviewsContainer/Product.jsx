import { PUBLIC_IMAGES } from "@/assets";

const Product = () => {
  return (
    <div className="flex gap-4">
      <div className="w-16 h-16 rounded-full overflow-hidden">
        <img
          src={PUBLIC_IMAGES?.SellerShoe}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-semibold text-sm text-avatar-heading">
          Adidas Terrex AX4 Mid Gore
        </h4>
        <p className="font-normal text-sm text-gray">
          No. of reviews
          <span className="font-semibold text-avatar-heading">: 45</span>
        </p>
      </div>
    </div>
  );
};

export default Product;

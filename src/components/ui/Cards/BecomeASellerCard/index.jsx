"use client"
import { useRouter } from "next/navigation";
import CustomButton from "../../Buttons/CustomButton";
import SellerTotalCard from "./SellerTotalCard";

const BecomeASellerCard = () => {
   const router = useRouter();
  
    const handleRegister = () => {
      router.push("/vendor-signup");
    };
  return (
    <>
    <div className="container">
      <div className="bg-[url('/images/background_images/become_a_seller_bg.png')] bg-cover bg-center h-[410px] md:h-72 w-full rounded-3xl flex md:justify-end !py-9">
        <div className="flex flex-col gap-4 md:max-w-[870px] w-full md:h-52 md:!mr-24 !px-5 md:!px-0">
          <div className="flex flex-col gap-2">
            <h1 className="text-white font-bold text-3xl md:text-4xl">
              Become <span className="text-secondary">a seller</span>
            </h1>
            <p className="font-semibold text-sm text-white">
              Join thousands of businesses selling on Figgz. Reach millions of
              customers and grow your business globally.
            </p>
          </div>
          <div className="flex gap-1.5 w-full md:w-1/2">
            <CustomButton className="w-full bg-secondary rounded-3xl text-white text-xs h-9"   clickHandler={handleRegister}>
              Register as seller
            </CustomButton>
            <CustomButton className="w-full border border-secondary rounded-3xl text-secondary text-xs h-9">
              Lear more
            </CustomButton>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <SellerTotalCard number="5,000+" name="Active Sellers"/>
            <SellerTotalCard number="2M+" name="Products"/>
            <SellerTotalCard number="150+" name="Countries"/>
            <SellerTotalCard number="99.9%" name="Uptime"/>
            </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default BecomeASellerCard;


import Image from "next/image";
import styles from "./banner.module.css";
import { Icons, PUBLIC_IMAGES } from "@/assets";
import { Divider } from "@heroui/react";
import CustomButton from "@/components/ui/Buttons/CustomButton";

const SellerInfo = () => {
  return (
    <section
      className={`relative rounded-xl !py-8 !px-10 ${styles.seller_info_box}`}
    >
      <div className="relative z-10 h-full flex">
        <div className="flex flex-col gap-3 justify-center items-start !pr-7">
          <div className="w-20 h-20 relative">
            <Image
              src={PUBLIC_IMAGES.SellerInfoProfile}
              alt="Profile"
              fill
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="w-30 h-20 relative">
            <Image
              src={PUBLIC_IMAGES.SellerInfoIcon}
              alt="Icon"
              fill
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="font-semibold text-lg text-secondary">
            Quality Products, Affordable Prices.
          </h3>
          <span className="font-normal text-product-text-info text-sm ">
            Founded in 2020, we aim to provide top-quality products at
            pocket-friendly prices.
          </span>
          <Icons.StarsIcon width={120} height={18} />
        </div>
        <Divider orientation="vertical" className="h-[310px] " />
        <div className="flex flex-col gap-8 justify-center items-start !pl-7">
          <div className="flex gap-9 items-center">
            <div>
              <h4 className="font-normal text-sm text-product-text-info">
                Business Type
              </h4>
              <span className="font-medium text-sm text-secondary">
                Registered Online Retailer
              </span>
            </div>
            <div>
              <h4 className="font-normal text-sm text-product-text-info">
                Location
              </h4>
              <span className="font-medium text-sm text-secondary">
                Kolkata WB 70014, India
              </span>
            </div>
            <div>
              <h4 className="font-normal text-sm text-product-text-info">
                Years in Business
              </h4>
              <span className="font-medium text-sm text-secondary">
                15Years+
              </span>
            </div>
          </div>
          <div className="flex gap-9 items-center">
            <div>
              <h4 className="font-normal text-sm text-product-text-info">
                Business Mail
              </h4>
              <span className="font-medium text-sm text-secondary">
                hellozudiodashin@gmail.in
              </span>
            </div>
            <div>
              <h4 className="font-normal text-sm text-product-text-info">
                Business Contact
              </h4>
              <span className="font-medium text-sm text-secondary">
                +91 974551478 / 002 9854 14578
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <h4 className="font-normal text-sm text-product-text-info">
                Shipping & Returns Policy
              </h4>
              <span className="font-medium text-sm text-secondary">
                Easy 7-day return and full refund if product is unused and in
                original condition.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end">
        <CustomButton className="font-medium text-xs w-[162px] h-[41px] !mb-[-45px]">
          Explore More Poducts
        </CustomButton>
      </div>
    </section>
  );
};

export default SellerInfo;

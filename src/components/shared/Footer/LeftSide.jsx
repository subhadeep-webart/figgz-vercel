"use client"
import Link from "next/link";

const LeftSide = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-7">
      <div className="text-white">
        <h3 className="text-sm md:text-xl font-bold !mb-3">Legal</h3>
        <div className="font-normal text-xs md:text-sm flex flex-col gap-2">
          <p>Privacy Policy</p>
          <p>Term & Conditions</p>
          <p>Cookie Policy</p>
          <p>Accessibility Statement</p>
          <p>Refund Policy</p>
          <p>Seller Policy</p>
        </div>
      </div>

      <div className="text-white">
        <h3 className="text-sm md:text-xl font-bold !mb-3">Customer Service</h3>
        <div className="font-normal text-xs md:text-sm flex flex-col gap-2">
          <p>Order Tracking</p>
          <Link href="/en/contact-us">Contact us</Link>
          <Link href={"/faq"}>FAQ’s/ Help Center</Link>
          <p>Shipping Information</p>
        </div>
      </div>

      <div className="text-white">
        <h3 className="text-sm md:text-xl font-bold !mb-3">Quick Links</h3>
        <div className="font-normal text-xs md:text-sm flex flex-col gap-2">
          <Link href="/en/about-us">About us</Link>
          <p>Career At Figgz</p>
          <p>Blogs</p>
        </div>
      </div>
      
    </div>
  );
};

export default LeftSide;

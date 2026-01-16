import CustomButton from "@/components/ui/Buttons/CustomButton";
import styles from "../authform.module.css";
import { PUBLIC_IMAGES } from "@/assets";
import { useRouter } from "next/navigation";
const MembershipForm = () => {
   const router = useRouter();
  
    const handleMembership = () => {
      router.push("/vendor-signup/account-verification");
    };
  
  return (
    <div className="max-w-[580px] w-full flex flex-col gap-5 items-center text-center !py-4">
        <img src={PUBLIC_IMAGES.VendorMembership} className="max-w-[159px] max-h-[130px] w-full h-full"/>
      <h1 className="text-foreground font-bold text-sm md:text-2xl ">
        Vendor Registration Membership Fee
      </h1>
      <p className="text-base text-text-payment-info font-normal leading-7 ">
        Welcome to our platform! Before you can start listing and selling your
        products, you must complete the registration process and pay a
        membership fee. This fee is required to ensure continuous access to all
        our platform features and tools for your business.
      </p>
      <p className="text-xs font-normal text-text-forgot-pass ">
        By registering, you agree to our terms and acknowledge that your
        membership will auto-renew monthly unless canceled.
      </p>
      <CustomButton className="bg-primary w-1/3 text-raisin font-semibold text-xs md:text-sm py-4" clickHandler={handleMembership}>
        Pay $49.99
      </CustomButton>
      <p className="text-base text-invoice-text font-normal leading-7 ">
        Membership fee is auto-renewed every month & You can Cancel it anytime.
      </p>
    </div>
  );
};

export default MembershipForm;

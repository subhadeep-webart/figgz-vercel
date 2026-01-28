import { PUBLIC_IMAGES } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import { useRouter } from "next/navigation";

const AccountVerificationForm = () => {
     const router = useRouter();
      
        const handleVerification = () => {
          router.push("/vendor");
        };
  return (
    <div  className="md:max-w-[580px] max-w-[288px] w-full flex flex-col gap-5 items-center text-center !py-4">
          <img src={PUBLIC_IMAGES.VendorVerification} className="max-w-[181px] max-h-[159px] md:max-w-[248px] md:max-h-[230px] w-full h-full"/>
      <h3 className="text-warning font-semibold text-base md:text-2xl text-center">
        Account Verification in Progress
      </h3>
      <h4 className="text-[#000000] font-medium text-sm md:text-base text-center">
        Your email has been verified successfully.
      </h4>
      <p className="text-product-text-info font-normal text-xs md:text-base">
        Your documents are now under{" "}
        <span className="text-[#000000]">KYC verification</span> . You’ll be
        notified once the review is complete.
      </p>
       <CustomButton className="bg-primary md:w-1/3 w-1/2 text-raisin font-semibold text-xs md:text-sm py-4" clickHandler={handleVerification}>
        Explore Dashboard
      </CustomButton>
    </div>
  );
};

export default AccountVerificationForm;

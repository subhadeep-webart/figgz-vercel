"use client"
import { Icons } from "@/assets";
import CustomButton from "../../Buttons/CustomButton";
import OtpInput from "../../InputField/OtpInput";
import styles from "./authform.module.css";
import { useRouter } from "next/navigation";

const OtpVerificationForm = () => {
  const router = useRouter();

  const handleVerifyOtp = () => {
    router.push("/en/login");
  };
  return (
    <>
      <div className={styles.login_form_container}>
        <div className="w-16 h-16 bg-bg-otp-icon rounded-full flex items-center justify-center">
          <Icons.MailIcon fill="#1249D2" size={28} />
        </div>

        <h1 className="text-foreground font-bold text-3xl text-center">
          OTP Verification
        </h1>
        <h2 className="text-text-info font-normal text-sm text-center">
          One Time Password (OTP) has been sent via Email to{" "}
          <span className="font-semibold">hellosmith*****@gmail.com</span>
        </h2>
        <p className="text-text-otp font-normal text-sm">
          Enter the OTP below to verify it.
        </p>
        <OtpInput />
        <p className="text-text-otp-resend text-sm">
          Resend OTP in: <span className="font-semibold"> 00:08 </span>
        </p>
        <div className="w-full flex justify-center">
          <CustomButton
            className="bg-primary w-2/3 text-raisin font-semibold text-sm py-4"
            clickHandler={handleVerifyOtp}
          >
            Verify OTP
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default OtpVerificationForm;

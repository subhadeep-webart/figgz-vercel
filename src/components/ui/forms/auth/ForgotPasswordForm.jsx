"use client";
import { useRouter } from "next/navigation";
import CustomButton from "../../Buttons/CustomButton";
import InputField from "../../InputField";
import styles from "./authform.module.css";

const ForgotPasswordForm = () => {
  const router = useRouter();
  const handleConfirmMail = () => {
    router.push("/en/create-new-password");
  };
  return (
    <>
      <div className={styles.login_form_container}>
        <h1 className="text-foreground font-bold text-sm md:text-2xl text-center">
          FORGOT PASSWORD ?
        </h1>
        <p className="text-text-forgot-pass font-normal text-xs md:text-sm text-center">
          Please write your email to receive a confirmation code to set a new
          password.
        </p>
        <InputField label="Email" placeholder="Enter email" type="email" />
        <div className="w-full flex justify-center">
          <CustomButton
            className="bg-primary w-2/3 text-raisin font-semibold text-xs md:text-sm py-4"
            clickHandler={handleConfirmMail}
          >
            Confirm Mail
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordForm;

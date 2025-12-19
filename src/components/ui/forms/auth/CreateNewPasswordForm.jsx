"use client"
import { useRouter } from "next/navigation";
import CustomButton from "../../Buttons/CustomButton";
import InputField from "../../InputField";
import styles from "./authform.module.css";

const CreateNewPasswordForm = () => {
  const router = useRouter();
  const handleUpdatePassword = () => {
    router.push("/en/login");
  };
  return (
    <>
      <div className={styles.login_form_container}>
        <h1 className="text-foreground font-bold text-2xl text-center">
          CREATE NEW PASSWORD
        </h1>
        <p className="text-text-forgot-pass font-normal text-sm text-center">
          Your new password must be different from your old one and include at
          least 8 characters, 1 number, and 1 special symbol.
        </p>
        <InputField
          label="New Password"
          placeholder="Enter password"
          type="password"
        />

        <InputField
          label="Confirm Password"
          placeholder="Enter password"
          type="text"
        />
        <div className="w-full flex justify-center">
          <CustomButton
            className="bg-primary w-2/3 text-raisin font-semibold text-sm py-4"
            clickHandler={handleUpdatePassword}
          >
            Update Password
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default CreateNewPasswordForm;

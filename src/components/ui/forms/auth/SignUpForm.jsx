"use client";

import Link from "next/link";
import CustomButton from "../../Buttons/CustomButton";
import InputField from "../../InputField";
import MobileInput from "../../InputField/MobileInput";
import styles from "./authform.module.css";
import { Icons } from "@/assets";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/en/otp-verification");
  };
  return (
    <>
      <div className={styles.signup_form_container}>
        <h1 className="text-foreground font-bold text-xl">BECOME A MEMBER</h1>
        <div className="grid grid-cols-2 gap-4 w-full">
          <InputField
            label="First name"
            placeholder="Enter first name"
            type="text"
          />
          <InputField
            label="Last name"
            placeholder="Enter last name"
            type="text"
          />
          <MobileInput
            label="Mobile number"
            placeholder="Enter mobile number"
            type="text"
          />
          <InputField label="Email" placeholder="Enter email" type="email" />
          <InputField
            label="Password"
            placeholder="Enter password"
            type="password"
          />
          <InputField
            label="Confirm password"
            placeholder="Enter confirm password"
            type="password"
          />
        </div>
        <CustomButton
          className="bg-primary w-1/2 text-raisin font-semibold text-sm py-4"
          clickHandler={handleRegister}
        >
          Register
        </CustomButton>
        <h2 className="font-normal text-base">
          Don&apos;t have an account?{" "}
          <Link href="/en/login" className="font-bold text-info">
            Login
          </Link>
        </h2>

        <div className="flex items-center gap-4">
          <p className=" font-bold text-lg text-[#000000]">OR</p>
          <div className="flex  items-center">
            <Icons.GoogleIcon />
            <p className="text-foreground font-normal text-sm">
              Log In To Continue
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;

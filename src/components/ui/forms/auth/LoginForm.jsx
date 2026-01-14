"use client";

import Link from "next/link";
import InputField from "../../InputField";
import styles from "./authform.module.css";
import CustomButton from "../../Buttons/CustomButton";
import { Icons } from "@/assets";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/en");
  };
  return (
    <>
      <div className={styles.login_form_container}>
        <h1 className="text-foreground font-bold text-sm md:text-2xl text-center">
          LOGIN TO YOUR ACCOUNT
        </h1>
        <div className="flex flex-col gap-5 w-full">
          <InputField label="Email" placeholder="Enter email" type="email" />
          <InputField
            label="Password"
            placeholder="Enter password"
            type="password"
          />
        </div>
        <Link
          href="/en/forgot-password"
          className="text-info text-center font-bold text-xs md:text-base "
        >
          Forgot password ?
        </Link>
        <div className="w-full flex justify-center">
          <CustomButton
            className="bg-primary w-2/3 text-raisin font-semibold text-xs md:text-sm py-4"
            clickHandler={handleLogin}
          >
            Login
          </CustomButton>
        </div>
        <h2 className="text-center font-normal text-sm md:text-base">
          Don&apos;t have an account?{" "}
          <Link href="/en/sign-up" className="font-bold text-info">
            Register
          </Link>
        </h2>
        <p className="text-center font-bold text-sm md:text-lg text-[#000000]">OR</p>

        <div className="flex justify-center items-center gap-2">
          <Icons.GoogleIcon />
          <p className="text-foreground font-normal text-sm">
            Log In To Continue
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

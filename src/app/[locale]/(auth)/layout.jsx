"use client"
import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import styles from "./authpage.module.css";
import { usePathname } from "next/navigation";

const getAuthBackground = (pathname) => {
  if (pathname.includes("sign-up")) return styles.signup;
  if (pathname.includes("login")) return styles.login;
  if (pathname.includes("vendor-signup")) return styles.vendor_signup;

  // default fallback
  return styles.default;
};

const AuthLayout = ({ children }) => {
  const pathname = usePathname();
  const bg_man = getAuthBackground(pathname);
  return (
    <section className={`${styles.auth_bg} ${bg_man}`}>
      <AuthFormWrapper>{children}</AuthFormWrapper>
    </section >
  );
};

export default AuthLayout;

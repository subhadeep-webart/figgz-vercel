"use client"
import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import styles from "./authpage.module.css";
import { usePathname } from "next/navigation";
const AuthLayout = ({ children }) => {
  const pathname = usePathname();
  const bg_man = pathname.includes("sign-up") ? styles.signup : styles.login;
  return (
    <section className={`${styles.auth_bg} ${bg_man}`}>
      <AuthFormWrapper>{children}</AuthFormWrapper>
    </section >
  );
};

export default AuthLayout;

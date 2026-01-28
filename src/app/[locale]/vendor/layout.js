"use client";
import HomePageHero from "@/components/shared/HeroSection/HomePageHero";
import VendorDashboardMobileTab from "@/components/vendors/DashboardLayout/VendorDashboardMobileTab";
import VendorDashboardSidebar from "@/components/vendors/DashboardLayout/VendorDashboardSidebar";
import { useEffect } from "react";

const VendorLayout = ({ children }) => {
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.backgroundColor = "#F5F0EB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <section className="container w-full">
      <HomePageHero />
      <div className="flex flex-col md:flex-row justify-start gap-9 !pt-9">
        <VendorDashboardSidebar />
        <VendorDashboardMobileTab />
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
};

export default VendorLayout;

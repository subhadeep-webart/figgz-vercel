"use client";

import { usePathname, useRouter } from "next/navigation";
import CustomButton from "@/components/ui/Buttons/CustomButton";

const TabContainer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { key: "general", label: "General", width: "w-24" },
    { key: "restriction", label: "Usage Restriction", width: "w-44" },
    { key: "limits", label: "Usage Limits", width: "w-36" },
  ];

  const activeTab = pathname.split("/").pop();

  return (
    <div className="flex gap-4">
      {tabs.map((tab) => (
        <CustomButton
          key={tab.key}
          className={`text-xs font-normal !py-2.5 bg-transparent ${tab.width} ${
            activeTab === tab.key
              ? " text-invoice-text border border-invoice-text"
              : " text-foreground border border-foreground"
          }`}
          clickHandler={() => router.push(`/vendor/add-coupon/${tab.key}`)}
        >
          {tab.label}
        </CustomButton>
      ))}
    </div>
  );
};

export default TabContainer;

"use client";
import { Icons } from "@/assets";
import InformationCard from "./InformationCard";

const InformationSection = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <InformationCard
        icon={Icons.WorldIcon}
        iconColor="#F48B22"
        iconSize={50}
        title="Shipping Worldwide"
        description="Porem ipsum dolor sit amet, consectetur adipi."
      />

      <InformationCard
        icon={Icons.ReturnIcon}
        iconColor="#F48B22"
        iconSize={50}
        title="Easy Return"
        description="Free 7-day return if eligible, so easy"
      />

      <InformationCard
        icon={Icons.CashPaymentIcon}
        iconColor="#F48B22"
        iconSize={50}
        title="COD Available"
        description="Supplier give bills for this product."
      />
    </div>
  );
};

export default InformationSection;

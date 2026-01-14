import CountCard from "@/components/ui/Cards/CountCard";
import { Divider } from "@heroui/react";

const CountSection = ({ className = "" }) => {
  return (
    <div className={`flex justify-between md:justify-end md:gap-9 w-full md:max-w-[746px] h-[87px] ${className}`}>
      <CountCard value={"500,000+"} title={"Orders Shipped"}/>
      <Divider orientation="vertical" />
      <CountCard value={"250,000+"} title={"Happy Customer"}/>
      <Divider orientation="vertical" />
      <CountCard value={"3,000+"} title={"Product Available"}/>
    </div>
  );
};

export default CountSection;

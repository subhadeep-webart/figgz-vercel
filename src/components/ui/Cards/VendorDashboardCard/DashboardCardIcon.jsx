

import { Icons } from "@/assets";
import { cn } from "@heroui/react";

const DashboardCardIcon = ({
  icon: Icon = Icons.CalendarCheck, 
  outerClassName,
  innerClassName,
  iconClassName,
  fill = "#003984",
  stroke = "#ffffff",
}) => {
  if (!Icon) return null;

  return (
    <div
      className={cn(
        "relative h-8 w-8 md:h-12 md:w-12 rounded-full flex justify-center items-center calendar-cut-border",
        outerClassName
      )}
    >
      <div
        className={cn(
          "w-6 h-6 md:w-9 md:h-9 rounded-full bg-vendor-card-info flex justify-center items-center",
          innerClassName
        )}
      >
        <Icon className={cn(iconClassName)} fill={fill} stroke={stroke} />
      </div>
    </div>
  );
};

export default DashboardCardIcon;


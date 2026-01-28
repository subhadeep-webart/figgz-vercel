import DashboardCardIcon from "./DashboardCardIcon";

const VendorDashboardCard = ({
  total,
  title,
  icon,
  fill,
  stroke,
  outerClassName,
  innerClassName,
  iconClassName,
}) => {
  return (
    <div className="max-w-52 w-full bg-white rounded-xl shadow-md !py-3 !px-4">
      <div className="flex justify-between items-end !py-3.5">
        <p className="text-avatar-heading font-medium text-xl md:text-2xl">{total}</p>
        <DashboardCardIcon
          icon={icon}
          fill={fill}
          stroke={stroke}
          outerClassName={outerClassName}
          innerClassName={innerClassName}
          iconClassName={iconClassName}
        />
      </div>
      <span className="inline-block text-sidebar-lucide font-normal text-xs md:text-sm">
        {title}
      </span>
    </div>
  );
};

export default VendorDashboardCard;

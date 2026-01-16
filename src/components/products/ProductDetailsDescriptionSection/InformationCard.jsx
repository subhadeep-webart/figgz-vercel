
const InformationCard = ({ icon: Icon, iconColor = "#F48B22",  title, description }) => {
  return (
    <div className="flex justify-start lg:items-start items-center gap-3.5 w-full">
      {Icon && <Icon fill={iconColor} className="lg:max-w-48 lg:max-h-48 w-20 h-20"/>}

      <div className="flex flex-col justify-center lg:w-60">
        <span className="font-semibold text-sm lg:text-2xl text-product-text-base whitespace-nowrap">
          {title}
        </span>

        <span className="font-medium text-[10px] lg:text-base text-product-text-info2">
          {description}
        </span>
      </div>
    </div>
  );
};

export default InformationCard;

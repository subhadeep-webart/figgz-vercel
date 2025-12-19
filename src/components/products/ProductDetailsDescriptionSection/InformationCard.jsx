
const InformationCard = ({ icon: Icon, iconColor = "#F48B22", iconSize = 50, title, description }) => {
  return (
    <div className="flex justify-start items-start gap-3.5 w-full">
      {Icon && <Icon fill={iconColor} size={iconSize} />}

      <div className="flex flex-col justify-center w-60">
        <span className="font-semibold text-2xl text-product-text-base whitespace-nowrap">
          {title}
        </span>

        <span className="font-medium text-base text-product-text-info2">
          {description}
        </span>
      </div>
    </div>
  );
};

export default InformationCard;

const BankCard = ({title,des}) => {
  return (
    <div className="bg-sidebar-icon-container rounded-xl !py-5 !px-3 min-w-48 w-full">
      <h3 className="font-semibold text-sm text-dark-gray !mb-1">{title}</h3>
      <span className="font-normal text-sm text-dark-gray">{des}</span>
    </div>
  );
};

export default BankCard;

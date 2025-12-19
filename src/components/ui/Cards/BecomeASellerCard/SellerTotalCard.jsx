const SellerTotalCard = ({number,name}) => {
  return (
    <>
      <div className="max-w-52 w-full h-14 border border-border-seller-card !px-6 !py-3 rounded-md whitespace-nowrap">
        <div className="flex flex-col items-center">
          <p className="text-sm font-bold text-foreground">{number}</p>
          <span className="text-sm font-normal text-foreground">
           {name}
          </span>
        </div>
      </div>
    </>
  );
};

export default SellerTotalCard;

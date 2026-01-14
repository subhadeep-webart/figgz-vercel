const CountCard = ({value,title}) => {
  return (
    <div>
      <h3 className="text-secondary text-sm md:text-3xl font-semibold">{value}</h3>
      <span className="text-text-payment-info text-[11px] md:text-2xl font-normal text-nowrap">{title}</span>
    </div>
  );
};

export default CountCard;

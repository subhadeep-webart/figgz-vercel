const CountCard = ({value,title}) => {
  return (
    <div>
      <h3 className="text-secondary text-3xl font-semibold">{value}</h3>
      <span className="text-text-payment-info text-2xl font-normal text-nowrap">{title}</span>
    </div>
  );
};

export default CountCard;

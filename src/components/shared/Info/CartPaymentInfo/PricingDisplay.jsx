const PricingDisplay = ({ labelText="Price(3)", amount="$ 20.00" }) => {
    return (
        <div className="w-full text-base flex justify-between items-center">
            <p className="text-payment-info font-normal">{labelText}</p>
            <p className="font-semibold">{amount}</p>
        </div>
    )
}

export default PricingDisplay;
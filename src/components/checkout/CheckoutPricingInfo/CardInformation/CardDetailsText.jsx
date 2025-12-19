const CardDetailsText = ({ labelText, info }) => {
    return (
        <div className="w-full flex flex-col gap-2">
            <p className="text-payment-info font-normal text-base">{labelText}</p>
            <span className="inline-block text-product-text-base font-medium text-base">{info}</span>
        </div>
    )
}

export default CardDetailsText

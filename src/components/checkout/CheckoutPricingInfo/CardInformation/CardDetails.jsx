import CardDetailsText from "./CardDetailsText";

const CardDetails = () => {
    return (
        <div className="bg-shopping-cart rounded-2xl !px-4 !py-4">
            <CardDetailsText labelText={"Card Holder Name"} info={"Subhadeep Das"} />
            <CardDetailsText labelText={"Card Number"} info={"**** **** **** 2184"} />
            <CardDetailsText labelText={"Expire Date"} info={"08/2025"} />
            <p className="text-right text-xs font-medium text-secondary !py-1">Change Card</p>
        </div>
    )
}

export default CardDetails;
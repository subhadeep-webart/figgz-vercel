const SelectCartSelectDisplay = ({ label, text }) => {
    return (
        <div className="flex gap-2 items-center py-2">
            <span className="text-cart-select font-medium text-base">{label}</span>
            <span>{text}</span>
        </div>
    )
}

export default SelectCartSelectDisplay;

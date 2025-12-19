const VendorSectionHeaderWrapper = ({ headerText = "", subHeaderText = "", children }) => {
    return (
        <div className="w-full flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <h3 className="text-avatar-heading text-2xl font-semibold">{headerText}</h3>
                {subHeaderText && <p className="text-vendor-section-header text-base font-normal">{subHeaderText}</p>}
            </div>
            {children}
        </div>
    )
}

export default VendorSectionHeaderWrapper;
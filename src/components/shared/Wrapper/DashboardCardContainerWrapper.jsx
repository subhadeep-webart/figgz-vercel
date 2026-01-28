const DashboardCardContainerWrapper = ({ headerName = "", children }) => {
    return (
        <div className="w-full flex flex-col gap-4">
            {headerName && <h4 className="text-avatar-heading text-base md:text-lg font-semibold">{headerName}</h4>}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
                {children}
            </div>
        </div>
    )
}

export default DashboardCardContainerWrapper;
import DashboardCardIcon from "./DashboardCardIcon";

const VendorDashboardCard = () => {
    return (
        <div className="max-w-52 w-full bg-white rounded-xl shadow-md !py-3 !px-4">
            <div className="flex justify-between items-end !py-3.5">
                <p className="text-avatar-heading font-medium text-2xl">3541</p>
                <DashboardCardIcon />
            </div>
            <span className="inline-block text-sidebar-lucide font-normal text-sm">Total Orders</span>
        </div>
    )
}

export default VendorDashboardCard;
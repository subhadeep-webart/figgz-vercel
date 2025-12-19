import { Icons } from "@/assets";

const DashboardCardIcon = () => {
    return (
        <div className="relative h-12 w-12 rounded-full flex justify-center items-center calendar-cut-border">
            <div className="w-9 h-9 rounded-full bg-vendor-card-info flex justify-center items-center">
                <Icons.CalendarCheck fill={"#003984"} stroke="#ffffff" />
            </div>
        </div>
    )
}

export default DashboardCardIcon;
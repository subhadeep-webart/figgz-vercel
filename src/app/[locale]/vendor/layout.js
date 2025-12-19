import VendorDashboardSidebar from "@/components/vendors/DashboardLayout/VendorDashboardSidebar";

const VendorLayout=({children})=>{
    return(
        <section className="container w-full">
            <div className="flex justify-start gap-9">
                <VendorDashboardSidebar/>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default VendorLayout;
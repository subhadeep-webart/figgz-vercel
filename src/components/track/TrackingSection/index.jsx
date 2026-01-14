import { PUBLIC_IMAGES } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";

const TrackingSection=()=>{
    return(
        <div className="flex flex-col gap-8 !mb-9">
            <div className="flex justify-between">
            <div>
            <h3 className="font-bold text-lg text-foreground">Order Status</h3>
            <p className="font-normal text-base text-foreground">Order ID: #2145788</p>
            </div>
               <CustomButton className="!px-6 bg-dark-slate-blue">Tracking ID: #2145788</CustomButton>
               </div>
               <img src={PUBLIC_IMAGES.TrackingImg}/>
        </div>
    )
};

export default TrackingSection;
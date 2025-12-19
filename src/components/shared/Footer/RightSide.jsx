
import { Icons } from "@/assets";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import DarkInputField from "@/components/ui/InputField/DarkInputField";

const RightSide = () => {
    return (
        <div>
            <h3 className="text-xl font-bold text-white !mb-8">Stay Updated</h3>
            <div className="flex flex-col gap-5">
                <DarkInputField placeholder="Enter your email ID" type="email" />
                <CustomButton className="bg-primary w-2/3 text-[#000000] font-medium text-sm py-4 h-14">
                    Enter to subscribe
                </CustomButton>
                <div className="flex gap-3.5">
                    <Icons.FacebookIcon fill="#FFFFFF" size={24} />
                    <Icons.TwitterICon fill="#FFFFFF" size={24} />
                    <Icons.InstagramIcon fill="#FFFFFF" size={24} />
                    <Icons.YoutubeIcon fill="#FFFFFF" size={24} />
                    <Icons.TiktokIcon fill="#FFFFFF" size={24} />
                    <Icons.SnapchatIcon fill="#FFFFFF" size={24} />
                </div>
            </div>
        </div>
    )
};

export default RightSide;
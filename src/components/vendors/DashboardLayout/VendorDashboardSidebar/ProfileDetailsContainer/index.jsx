import VendorAvatar from "./VendorAvatar";
import VendorDetailsContainer from "./VendorDetailsContainer";

const ProfileDetailsContainer = () => {
    return (
        <div className="bg-primary !py-5 !px-5 flex flex-col justify-center items-center gap-5 rounded-4xl">
            <VendorAvatar />
            <VendorDetailsContainer />
        </div>
    )
}

export default ProfileDetailsContainer;
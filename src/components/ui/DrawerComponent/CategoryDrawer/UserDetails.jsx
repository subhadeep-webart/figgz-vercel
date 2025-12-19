import UserAvatar from "@/components/ui/Avatar/UserAvatar";
import UserNameContainer from "./UserNameContainer";

const UserDetails = () => {
    return (
        <div className="w-full flex justify-start items-center gap-4">
            <UserAvatar />
            <UserNameContainer />
        </div>
    )
}

export default UserDetails;
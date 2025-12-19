import { Icons } from "@/assets";
import IconButton from "@/components/ui/Buttons/IconButton";

const LogoutButton = ({ className }) => {
    return (
        <IconButton label="Logout" className={className}>
            <Icons.LogOut size={28} className="text-white" />
        </IconButton>
    )
}

export default LogoutButton;
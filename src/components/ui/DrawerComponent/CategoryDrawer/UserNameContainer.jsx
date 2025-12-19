import LogoutButton from "@/components/shared/Button/LogoutButton";

const UserNameContainer = () => {
    return (
        <div className="flex flex-col items-start justify-center gap-4">
            <h3 className="text-3xl font-bold text-foreground">Welcome</h3>
            <p className="text-foreground text-xl font-normal">Maverick Stone Doe</p>
            <LogoutButton className={"bg-transparent min-w-7 w-7 h-7"}/>
        </div>
    )
}

export default UserNameContainer;
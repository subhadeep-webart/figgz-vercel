
import { Avatar } from "@heroui/react"
import NotificationActionDropdown from "./NotificationActionDropdown"

const NotificationCard = () => {
    return (
      
        <div className="w-full flex justify-between items-center !px-4">
            <div className="w-[20%]">
                <Avatar
                 radius="lg"
                    as="button"
                    className="transition-transform w-[58px] h-[58px] lg:w-[90px] lg:h-[84px]"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
            </div>
            <div className="flex flex-col gap-1 border-b border-dashed border-silver-gray !py-6">
                <h3 className="text-foreground text-base font-semibold">Flash Sale Alert</h3>
                <p className="text-dim-gray text-sm font-normal">Grab your favorite products at amazing prices! Limited time only.</p>
            </div>
            <div className="w-fit">
                <NotificationActionDropdown />
            </div>
        </div>
       
    )
}

export default NotificationCard
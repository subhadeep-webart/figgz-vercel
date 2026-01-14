import { cn } from "@heroui/react";
import styles from "./announcementcard.module.css";
const VendorAnnouncementCard = ({ annoucementHeader, announcementContent,className }) => {
    return (
        <div className={cn("!px-9 !py-8 rounded-3xl shadow-md bg-white",className)}>
            <div className="flex justify-between !mb-2">
            <h3 className="font-medium text-lg text-secondary">{annoucementHeader}</h3>
            <span className="font-normal text-sm text-text-forgot-pass">24 April, 2025</span>
            </div>
            <div className={styles.announcement_inner}>
                {announcementContent}
            </div>
        </div>
    )
}

export default VendorAnnouncementCard;
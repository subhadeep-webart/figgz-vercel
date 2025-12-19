import styles from "./announcementcard.module.css";
const VendorAnnouncementCard = ({ annoucementHeader, announcementContent }) => {
    return (
        <div className="!px-9 !py-8 rounded-3xl shadow-md">
            <h3 className="font-medium text-lg text-secondary">{annoucementHeader}</h3>
            <div className={styles.announcement_inner}>
                {announcementContent}
            </div>
        </div>
    )
}

export default VendorAnnouncementCard;
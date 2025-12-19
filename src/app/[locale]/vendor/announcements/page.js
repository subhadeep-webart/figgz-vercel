import VendorAnnouncementCard from "@/components/ui/Cards/VendorAnnouncementCard";

const AnnoucementsPage = () => {
    return (
        <section className="w-full !space-y-7">
            <VendorAnnouncementCard annoucementHeader={"Policy Changes"} announcementContent={"We’ve updated our Terms of Service and Privacy Policy. Please review them to ensure you’re up-to-date with the latest changes."} />
            <VendorAnnouncementCard annoucementHeader={"Policy Changes"} announcementContent={"We’ve updated our Terms of Service and Privacy Policy. Please review them to ensure you’re up-to-date with the latest changes."} />
            <VendorAnnouncementCard annoucementHeader={"Policy Changes"} announcementContent={"We’ve updated our Terms of Service and Privacy Policy. Please review them to ensure you’re up-to-date with the latest changes."} />
            <VendorAnnouncementCard annoucementHeader={"Policy Changes"} announcementContent={"We’ve updated our Terms of Service and Privacy Policy. Please review them to ensure you’re up-to-date with the latest changes."} />
        </section>
    )
}

export default AnnoucementsPage;
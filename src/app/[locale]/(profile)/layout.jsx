import UserProfileSidebar from "@/components/userprofile/UserProfileSidebar";

const ProfileLayout = ({ children }) => {
    return (
        <section className="container section_padding flex justify-start items-start gap-7">
            <UserProfileSidebar/>
            <div className="w-[70%]">
                {children}
            </div>
        </section>
    )
}

export default ProfileLayout;
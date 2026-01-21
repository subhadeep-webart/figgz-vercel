import DownSection from "@/components/userprofile/UserProfileMobile/DownSection";
import TopSection from "@/components/userprofile/UserProfileMobile/TopSection";
import UserProfileSidebar from "@/components/userprofile/UserProfileSidebar";

const ProfileLayout = ({ children }) => {
    return (
        <section className="container section_padding flex justify-start items-start gap-7">
      
            <UserProfileSidebar/>
       
            <div className="md:w-[70%] w-full">
                <TopSection/>
                {children}
                  <DownSection/>
            </div>
           
        </section>
    )
}

export default ProfileLayout;
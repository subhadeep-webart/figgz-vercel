import TeamMemberCard from "@/components/ui/Cards/TeamMemberCard";

const OurTeamSection=()=>{
    return(
        <section>
        <div>
            <h2 className="font-bold text-sm md:text-4xl text-foreground text-center !mb-10">Our Team Members</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-16 !mb-10">
                <TeamMemberCard/>
                <TeamMemberCard/>
                <TeamMemberCard/>
                <TeamMemberCard/>
                <TeamMemberCard/>
                <TeamMemberCard/>
            </div>
        </div>
        </section>
    )
};

export default OurTeamSection;
import { PUBLIC_IMAGES } from "@/assets";
import Image from "next/image";

const TeamMemberCard = () => {
  return (
   <div className="w-[150px] md:w-[396px] flex flex-col items-center gap-5 relative !mt-[120px]">

      <div className="w-[150px] md:w-[396px] h-[116px] md:h-[271px] border border-primary rounded-4xl relative flex flex-col items-center !pt-[135px]">
    
        <div className="w-[116px] h-[116px] md:w-[271px] md:h-[271px] absolute -top-[55px] md:-top-[135px]">
          <Image
            src={PUBLIC_IMAGES.Team}
            alt="Team Member"
            fill
            className="object-contain rounded-full"
          />
        </div>

        <div className="flex flex-col gap-1 items-center justify-center !mt-4 absolute top-[62px] md:top-[143px]">
          <h3 className="font-semibold text-[10px] md:text-2xl text-foreground">Krishna Rajmurty</h3>
          <h4 className="font-medium text-xs md:text-3xl text-secondary">CEO</h4>
        </div>
      </div>
    </div>

   
  );
};

export default TeamMemberCard;






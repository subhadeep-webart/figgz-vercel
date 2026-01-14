import { Icons } from "@/assets";
import AboutOurValuesCard from "@/components/ui/Cards/AboutOurValuesCard";

const OurValues=()=>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
         <AboutOurValuesCard
          icon={Icons.CustomerIcon}
          title="Customer First Approach"
          description="Torem ipsum dolor sit amet, consectetur adipiscing elit."
        />
          <AboutOurValuesCard
          icon={Icons.QualityIcon}
          title="Quality Matters"
          description="Torem ipsum dolor sit amet, consectetur adipiscing elit."
        />
          <AboutOurValuesCard
          icon={Icons.CreativeMindIcon}
          title="Innovation"
          description="Torem ipsum dolor sit amet, consectetur adipiscing elit."
        />
          <AboutOurValuesCard
          icon={Icons.ServiceSettingIcon}
          title="Integrity"
          description="Torem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        </div>
    )
};

export default OurValues;
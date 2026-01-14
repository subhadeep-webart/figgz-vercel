
const AboutOurValuesCard = ({ icon: Icon, title, description }) => {
    return (
        <div className=" w-full flex items-center gap-5">
            <div className="w-10 h-10 md:w-16 md:h-16 min-w-10 min-h-10 rounded-full border border-white flex items-center justify-center overflow-hidden">
                <Icon className="md:w-9 md:h-9 w-4 h-4 min-w-4" />
            </div>

            <div className="flex flex-col w-[334px]">
                <h3 className="font-bold text-sm md:text-xl text-foreground ">{title}</h3>
                <span className="font-medium text-[10px] md:text-base text-foreground ">{description}</span>
            </div>
        </div>
    );
};

export default AboutOurValuesCard;

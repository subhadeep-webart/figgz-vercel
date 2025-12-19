
const AboutOurValuesCard = ({ icon: Icon, title, description }) => {
    return (
        <div className=" w-full flex items-center gap-5">
            <div className="w-16 h-16 min-w-14 min-h-14 rounded-full border border-white flex items-center justify-center overflow-hidden">
                <Icon size={38} />
            </div>

            <div className="flex flex-col w-[334px]">
                <h3 className="font-bold text-xl text-foreground ">{title}</h3>
                <span className="font-medium text-base text-foreground ">{description}</span>
            </div>
        </div>
    );
};

export default AboutOurValuesCard;

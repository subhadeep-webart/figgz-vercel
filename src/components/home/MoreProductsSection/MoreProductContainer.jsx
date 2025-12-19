import MoreProductContainerHeader from "./MoreProductContainerHeader";

const MoreProductContainer = ({ headerText, children }) => {
    return (
        <div className="w-full flex flex-col gap-5">
            <MoreProductContainerHeader headerText={headerText} />
            <div className="grid grid-cols-2 gap-6 w-full">
                {children}
            </div>
        </div>
    )
}

export default MoreProductContainer;
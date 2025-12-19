import SizeCheckBox from "./SizeCheckBox";

const SizeChartContainer = ({ sizeChart = [] }) => {
    return (
        <>
            {sizeChart?.map((size) => (<SizeCheckBox size={size} key={size} />))}
        </>
    )
}

export default SizeChartContainer;
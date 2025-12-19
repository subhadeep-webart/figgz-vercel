const { default: ColorCheckboxImagePreview } = require("./ColorChecboxImagePreview")
const { default: ColorCheckbox } = require("./ColorCheckbox")

const ColorChart = () => {
    return (
        <ul className="w-full flex justify-start items-center gap-1.5">
            <li><ColorCheckbox /></li>
            <li><ColorCheckbox /></li>
            <li><ColorCheckbox /></li>
            <li><ColorCheckbox /></li>
        </ul>
    )
}

export default ColorChart;
/**
 * Represents utils to customize Tooltip in LinearChart
 */
import PropTypes from 'prop-types'
import './index.css'
/**
 * Customize ToolTip for linear to recharts
 * @component
 * @prop {boolean} active
 * @prop {array} payload
 * @returns {JsxElement}
 */
function CustomTooltipLinear({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip tooltip-linearChart">
                <p className="label label-linearChart">{`${payload[0].value} min`}</p>
            </div>
        )
    }

    return null
}
CustomTooltipLinear.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
}
export default CustomTooltipLinear

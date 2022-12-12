/**
 * Represents utils to customize Tooltip in LinearChart
 */
import PropTypes from 'prop-types'
/**
 *
 * @param {boolean} active
 * @param {array} payload
 * @returns {JsxElement}
 */
export function renderCustomTooltipLinear({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip tooltip-linearChart">
                <p className="label label-linearChart">{`${payload[0].value} min`}</p>
            </div>
        )
    }

    return null
}
renderCustomTooltipLinear.propTypes = {
    active: PropTypes.bool.isRequired,
    payload: PropTypes.array.isRequired,
}

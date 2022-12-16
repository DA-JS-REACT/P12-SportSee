import PropTypes from 'prop-types'
import './index.css'
/**
 * Customize ToolTip for BarChart to recharts
 * @param {boolean} active
 * @param {Array} payload
 * @returns {JsxElement}
 */
function CustomToolTipBar({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].value}g`}</p>
                <p className="label">{`${payload[1].value}KCal`}</p>
            </div>
        )
    }
}
CustomToolTipBar.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
}
export default CustomToolTipBar

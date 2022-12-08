import PropTypes from 'prop-types'

export function renderCustomToolTipBar({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].value}g`}</p>
                <p className="label">{`${payload[1].value}KCal`}</p>
            </div>
        )
    }

    return null
}
renderCustomToolTipBar.propTypes = {
    active: PropTypes.bool.isRequired,
    payload: PropTypes.array.isRequired,
}
export function renderColorfulLegendText(value) {
    return <span style={{ color: '#74798c' }}>{value}</span>
}

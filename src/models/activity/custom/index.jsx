import { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class CustomizedAxisTick extends PureComponent {
    render() {
        const { x, y, stroke, payload } = this.props

        return (
            <g transform={`translate(${x},${y})`}>
                <text
                    x={0}
                    y={0}
                    dy={1}
                    textAnchor="end"
                    fill="#666"
                    transform="rotate(-35)"
                >
                    {payload.value}
                </text>
            </g>
        )
    }
}
CustomizedAxisTick.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    stroke: PropTypes.string,
    payload: PropTypes.object,
}

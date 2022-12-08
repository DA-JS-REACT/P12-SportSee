/* eslint-disable react/prop-types */
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

import PropTypes from 'prop-types'
import './index.css'
import { renderCustomTooltipLinear } from './utils'

function LinearChartAverage({ data }) {
    return (
        <div className="linearChart-Wrapper">
            <h2 className="linearChart-title">Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height={263}>
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    className="linear-graph"
                >
                    <CartesianGrid vertical={false} horizontal={false} />
                    <XAxis
                        dataKey="formatDay"
                        tickLine={false}
                        axisLine={false}
                        tick={{
                            fill: '#ffffff',
                            fontWeight: 500,
                            fontSize: 12,
                        }}
                    />

                    <YAxis
                        hide={true}
                        dataKey="duration"
                        domain={['dataMin - 20', 'dataMax + 20']}
                    />

                    <Tooltip
                        content={renderCustomTooltipLinear}
                        cursor={{ stroke: 'red', strokeWidth: 2 }}
                    />

                    <Line
                        type="natural"
                        dataKey="duration"
                        stroke="#FFFFFF"
                        dot={false}
                        activeDot={{ r: 5 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
LinearChartAverage.propTypes = {
    data: PropTypes.array.isRequired,
}
export default LinearChartAverage

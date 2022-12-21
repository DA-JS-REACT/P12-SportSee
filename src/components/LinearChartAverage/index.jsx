// @ts-check
/**
 *Diagram for the sessions - enpoint /user/:id/average-session
 */
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
import CustomTooltipLinear from '../CustomToolTipLinear'
import React from 'react'
/**
 *Diagram LinearChart of Recharts
 * @prop {Array.<{formatDay: String,duration: Number}>} data - data for the Diagram
 * @returns {React.ReactElement}
 */
function LinearChartAverage({ data }) {
    return (
        <div className="linearChart-Wrapper">
            <h2 className="linearChart-title">Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height="100%">
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
                        content={<CustomTooltipLinear />}
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
    data: PropTypes.arrayOf(
        PropTypes.shape({
            formatDay: PropTypes.string,
            duration: PropTypes.number,
        })
    ).isRequired,
}
export default LinearChartAverage

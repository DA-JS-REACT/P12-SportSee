import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'
import './index.css'
import { renderCustomToolTipBar } from './utils'
import { renderColorfulLegendText } from './utils'

function BarChartSession({ data }) {
    return (
        <div className="barchart-wrapper">
            <h2 className="barchart-title">Activité quotidienne</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    width={400}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barGap={3}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        tick={{ fill: '#9B9EAC' }}
                    />
                    <YAxis
                        orientation="right"
                        yAxisId="kilo"
                        dataKey="kilogram"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: '#9B9EAC' }}
                        tickMargin={20}
                        type="number"
                        domain={['dataMin - 1', 'dataMax + 1']}
                    />

                    <YAxis yAxisId="cal" datakey="calories" hide={true} />
                    <Tooltip content={renderCustomToolTipBar} offset={20} />
                    <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        iconSize="8"
                        height={50}
                        formatter={renderColorfulLegendText}
                    />
                    <Bar
                        yAxisId="kilo"
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[3, 3, 0, 0]}
                        barSize={6}
                        name="Poids (kg)"
                    />
                    <Bar
                        yAxisId="cal"
                        dataKey="calories"
                        fill="#E60000"
                        radius={[3, 3, 0, 0]}
                        barSize={6}
                        name="Calories Brûlées (kCal)"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
BarChartSession.propTypes = {
    data: PropTypes.array.isRequired,
}

export default BarChartSession

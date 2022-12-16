/**
 *Diagram for daily activity  - endpoints /user/:id/activity
 */
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
import { renderColorfulLegendText } from './utils'
import CustomToolTipBar from '../CustomToolTipBar'
import { useEffect, useState } from 'react'
import { getActivity } from '../../Services/Api/getActivity'
import Loader from '../Loader'
import Error from '../Error'
/**
 * Diagram BarChart of Recharts
 * @param {String} userId - id of user for its data
 * @returns  {JsxElement}
 */

function BarChartSession({ userId }) {
    const [activity, setActivity] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getActivity(setActivity, setError, setLoading, userId)
    }, [])

    return (
        <div className="barchart-wrapper">
            <h2 className="barchart-title">Activité quotidienne</h2>
            {isLoading ? (
                <Loader />
            ) : activity && !error ? (
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        width={400}
                        height={300}
                        data={activity}
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
                        <Tooltip content={<CustomToolTipBar />} offset={25} />
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
            ) : (
                <Error title={'500 '} message={'une erreur est survenue'} />
            )}
        </div>
    )
}
BarChartSession.propTypes = {
    userId: PropTypes.string.isRequired,
}

export default BarChartSession
// data: PropTypes.arrayOf(
//     PropTypes.shape({
//         kilogram: PropTypes.number,
//         calories: PropTypes.number,
//         day: PropTypes.number,
//     })
// ).isRequired,

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
import { useEffect, useState } from 'react'
import { getAverages } from '../../Services/Api/getAverages'
import Loader from '../Loader'
import Error from '../Error'
/**
 *Diagram LinearChart of Recharts
 * @param {String} userId - id of user for its data
 * @returns {JsxElement}
 */
function LinearChartAverage({ userId }) {
    const [average, setAverage] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        getAverages(setAverage, setError, setLoading, userId)
    }, [])

    return (
        <div className="linearChart-Wrapper">
            <h2 className="linearChart-title">Durée moyenne des sessions</h2>
            {isLoading ? (
                <Loader />
            ) : average && !error ? (
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={average}
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
            ) : (
                <Error title={'500 '} message={'une erreur est survenue'} />
            )}
        </div>
    )
}
LinearChartAverage.propTypes = {
    userId: PropTypes.string.isRequired,
}
export default LinearChartAverage

// data: PropTypes.arrayOf(
//     PropTypes.shape({
//         formatDay: PropTypes.string,
//         duration: PropTypes.number,
//     })
// ).isRequired,

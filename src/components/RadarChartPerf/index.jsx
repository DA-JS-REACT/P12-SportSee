/**
 *Diagram Performance - enpoint /user/:id/performance
 */
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from 'recharts'
import './index.css'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { getPerf } from '../../Services/Api/getPerf'
import Loader from '../Loader'
import Error from '../Error'
/**
 * Diagram RadarChart of Recharts
 * @param {String} userId - id of user for its data
 * @returns {JsxElement}
 */
function RadarChartPerf({ userId }) {
    const [perf, setPerf] = useState(null)
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getPerf(setPerf, setError, setLoading, userId)
    }, [])
    return (
        <div className="radarchart-Wrapper">
            {isLoading ? (
                <Loader />
            ) : perf && !error ? (
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                        cx="50%"
                        cy="50%"
                        outerRadius="65%"
                        data={perf.dataOfperf}
                    >
                        <PolarGrid radialLines={false} />
                        <PolarAngleAxis
                            dataKey="subject"
                            tick={{ fill: '#ffffff', fontSize: 11 }}
                        />
                        <PolarRadiusAxis axisLine={false} tick={false} />
                        <Radar
                            dataKey="value"
                            stroke="#FF0101B2"
                            fill="#FF0101B2"
                            fillOpacity={0.6}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            ) : (
                <Error title="500" message={'une erreur est survenue'} />
            )}
        </div>
    )
}
RadarChartPerf.propTypes = {
    userId: PropTypes.string.isRequired,
}

export default RadarChartPerf
// data: PropTypes.arrayOf(
//     PropTypes.shape({
//         subject: PropTypes.string,
//         value: PropTypes.number,
//     })
// ).isRequired,

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
function RadarChartPerf({ data }) {
    return (
        <div className="radarchart-Wrapper">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    data={data.dataOfperf}
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
        </div>
    )
}
RadarChartPerf.propTypes = {
    data: PropTypes.object.isRequired,
}

export default RadarChartPerf

import {
    RadialBarChart,
    RadialBar,
    ResponsiveContainer,
    PolarAngleAxis,
} from 'recharts'
import PropTypes from 'prop-types'
import './index.css'

function RadialChartScore({ data }) {
    console.log(data)
    const arrOfObj1 = Object.keys(data)
    const arrOfObj2 = Object.values(data)
    const name = arrOfObj1[arrOfObj1.length - 1]
    const score = arrOfObj2[arrOfObj2.length - 1]
    const format = new Map()
    format.set(name, score)
    format.set('fill', 'red')
    // console.log('arrOfObj1', format)
    const test = [
        {
            score: 0.2,
            fill: 'red',
        },
    ]
    return (
        <div className="radialChart-Wrapper">
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    data={data}
                    innerRadius={100}
                    outerRadius={160}
                    barSize={10}
                    startAngle={180}
                    endAngle={80}
                >
                    <RadialBar minAngle={180} dataKey="score" />
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        tick={false}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )
}
RadialChartScore.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            score: PropTypes.number,
            fill: PropTypes.string,
        })
    ).isRequired,
}
// RadialChartScore.propTypes = {
//     data: PropTypes.shape({
//         score: PropTypes.number,
//         fill: PropTypes.string,
//     }),
// }
export default RadialChartScore

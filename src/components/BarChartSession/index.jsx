import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

function BarChartSession({ data }) {
    return (
        <ResponsiveContainer width="70%" height={300}>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" tickLine={false} />
                <YAxis orientation="right" dataKey="calories" type="number" />
                <YAxis yAxisId="cal" datakey="calories" hide={true} />
                <Tooltip />
                <Legend />
                <Bar
                    dataKey="kilogram"
                    fill="#282D30"
                    radius={[3, 3, 0, 0]}
                    barSize={6}
                />
                <Bar
                    yAxisId="cal"
                    dataKey="calories"
                    fill="#E60000"
                    radius={[3, 3, 0, 0]}
                    barSize={6}
                />
            </BarChart>
        </ResponsiveContainer>
    )
}
BarChartSession.propTypes = {
    data: PropTypes.array.isRequired,
}

export default BarChartSession

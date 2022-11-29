import { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { random } from '../Utils'

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
import './user.css'

class Activity extends Component {
    constructor(data) {
        super(data)
        this.state = { activity: {} }
    }
    componentDidMount() {
        this.setState({ activity: this.props.data })
    }

    render() {
        const { activity } = this.state

        return (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={activity}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        )
    }
}
Activity.propTypes = {
    data: PropTypes.object.isRequired,
}
export default Activity

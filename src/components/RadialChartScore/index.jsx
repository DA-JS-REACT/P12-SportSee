// @ts-check
/**
 *Diagram average score - enpoint /user/:id/
 */
import {
    RadialBarChart,
    RadialBar,
    ResponsiveContainer,
    PolarAngleAxis,
} from 'recharts'
import PropTypes from 'prop-types'
import './index.css'
import React from 'react'

/**
 * Diagram RadialBarChart of Recharts
 * @prop {Array.<{score: Number,fill: String}>} data  - data for diagram
 * @returns {React.ReactElement}
 */
function RadialChartScore({ data }) {
    return (
        <div className="radialChart-Wrapper">
            <h2 className="radialChart-title">Score</h2>
            <p className="radialChart-text">
                <span>{data[0].score} %</span>
                <br />
                de votre Objectif
            </p>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    data={data}
                    innerRadius={90}
                    outerRadius={90}
                    barSize={10}
                    startAngle={180}
                    endAngle={180 - 360}
                >
                    <RadialBar cornerRadius={5} dataKey="score" />
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

export default RadialChartScore

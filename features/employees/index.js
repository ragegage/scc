import React from 'react'
import * as V from 'victory'
import COLORS from '../../assets/colors.js'

const employeeChart = (d) => {
  return d.map(em => em.date)
          .sort()
          .map((date, count) => ({x: toYear(date), y: count + 1}))
}

const toYear = (date) => (
  Date.parse(date) / (3.1536 * Math.pow(10, 10)) + 1970
)

export default ({ data }) => (
  <div className="employees">
    # employees vs. time
    <V.VictoryChart>
      <V.VictoryArea
        interpolation="stepAfter"
        data={employeeChart(data.employees)}
        style={{data: {fill: `${COLORS[data.dept]}`}}}
        />
    </V.VictoryChart>
  </div>
)

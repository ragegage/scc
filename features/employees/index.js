import React from 'react'
import * as V from 'victory'

const COLORS = {
  Sales: "#EEC431",
  Engineering: "#2B94EE",
  Support: "#9852EB",
  Total: "#E78C2F"
}

const employeeChart = (d) => {
  return d.map(em => em.date)
          .sort()
          .map((date, count) => ({x: toYear(date), y: count + 1}))
}

const toYear = (date) => (
  Date.parse(date) / (3.1536 * Math.pow(10, 10)) + 1970
)

export default ({ data }) => {
  return (
  <div className="chart">
    # employees vs. time
    <V.VictoryChart>
      <V.VictoryArea
        interpolation="stepAfter"
        data={employeeChart(data.employees)}
        style={{data: {fill: `${COLORS[data.dept]}`}}}
        />
    </V.VictoryChart>
  </div>
)}

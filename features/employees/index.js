import React from 'react'
import * as V from 'victory'

const employeeChart = (d) => {
  return d.map(em => em.date).sort().map((date, count) => ({x: Date.parse(date) / (3.1536*Math.pow(10,10)) + 1970, y: count + 1}))
}

export default ({ data }) => (
  <div className="chart">
    # employees vs. time
    <V.VictoryChart>
      <V.VictoryArea data={employeeChart(data)} />
    </V.VictoryChart>
  </div>
)
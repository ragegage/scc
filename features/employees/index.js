import React from 'react'
import * as V from 'victory'
import COLORS from '../../assets/colors.js'

const employeeChart = (d) => {
  return d.map(em => em.date)
          .sort()
          .map((date, count) => ({
            date: toYear(date),
            employeeCount: count + 1
          }))
          .concat({date: 2018, employeeCount: d.length})
        // ^ hack to make them all end at the same point in time (2018)
}

const toYear = (date) => (
  Date.parse(date) / (3.1536 * Math.pow(10, 10)) + 1970
)

export default ({ data }) => (
  <div className="employees">
    <V.VictoryChart>
      <V.VictoryAxis
        dependentAxis
      />
      <V.VictoryAxis
        tickValues={[2015, 2016, 2017, 2018]}
      />
      <V.VictoryArea
        interpolation="stepAfter"
        data={employeeChart(data.employees)}
        style={{data: {fill: `${COLORS[data.dept]}`}}}
        x="date"
        y="employeeCount"
        />
    </V.VictoryChart>
  </div>
)

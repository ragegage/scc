import React from 'react'
import * as V from 'victory'

const employeeChart = (d) => {
  return d.map(em => em.date).sort().map((date, count) => ({x: Date.parse(date) / (3.1536*Math.pow(10,10)) + 1970, y: count + 1}))
}

export default ({ data }) => {
  // console.log(employeeChart(data["Sales"]));

  return (
  <div className="chart">
    # employees vs. time
    <V.VictoryChart>
      <V.VictoryStack
        domain={{x: [2015, 2018], y: [0, 40]}}
        colorScale={"qualitative"}>
        {Object.keys(data).map(dept => (
          <V.VictoryArea
            interpolation="stepAfter"
            data={employeeChart(data[dept])} />
        ))}
      </V.VictoryStack>
    </V.VictoryChart>
  </div>
)}

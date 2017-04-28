import React from 'react'
import * as V from 'victory'

const COLORS = {
  Sales: "#EEC431",
  Engineering: "#2B94EE",
  Support: "#9852EB",
  Total: "#E78C2F"
}

const employeeChart = (d) => {
  const sortedYears = d.map(em => em.date)
                .sort()
                .map((date, count) => ({x: toYear(date), y: count + 1}))

  return deDup(sortedYears)
}

const toYear = (date) => (
  Date.parse(date) / (3.1536 * Math.pow(10, 10)) + 1970
)

const deDup = (years) => {
  let collisionCount = 0
  return years.map((datum, idx, arr) => {
    // debugger
    if(arr[idx + 1] && arr[idx + 1].x === datum.x){
      console.log(datum.x);
      collisionCount -= .00000001
      return {...datum, x: datum.x - collisionCount}
    }
    return datum
  })
}

export default ({ data }) => {
  console.log(employeeChart(data["Support"]));
  const d = employeeChart(data["Support"])
  // d[3] = {x: 2016.194520547944, y: 4}

  return (
  <div className="chart">
    # employees vs. time
    <V.VictoryChart>
      <V.VictoryStack
        domain={{x: [2015, 2018], y: [0, 40]}}>
        {Object.keys(data).map(dept => {
          console.log(COLORS[dept]);
          return (
          <V.VictoryArea
            domain={{x: [2015, 2017.95], y: [0, 20]}}
            interpolation="stepAfter"
            data={employeeChart(data[dept])}
            style={{data: {fill: `${COLORS[dept]}`}}}
            />
        )})}
      </V.VictoryStack>
    </V.VictoryChart>
    <V.VictoryStack>
      <V.VictoryArea
        interpolation="stepAfter"
        data={d} />
      <V.VictoryArea
        interpolation="stepAfter"
        data={d} />
      <V.VictoryArea
        interpolation="stepAfter"
        data={d} />
      <V.VictoryArea
        interpolation="stepAfter"
        data={d} />
      <V.VictoryArea
        interpolation="stepAfter"
        data={d} />
      <V.VictoryArea
        interpolation="stepAfter"
        data={d} />
    </V.VictoryStack>
  </div>
)}

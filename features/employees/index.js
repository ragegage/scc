import React from 'react'
import * as V from 'victory'
import COLORS from '../../assets/colors.js'
import * as Util from '../../assets/util.js'

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
        data={Util.employeesByDate(data.employees)}
        style={{data: {fill: `${COLORS[data.dept]}`}}}
        x="date"
        y="employeeCount"
        />
    </V.VictoryChart>
  </div>
)

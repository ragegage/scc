import React from 'react'
import * as V from 'victory'
import COLORS from '../../assets/colors.js'
import * as Util from '../../assets/util.js'

const Salaries = ({ data }) => (
  <div className="salary">
    <V.VictoryChart domainPadding={40}>
      <V.VictoryAxis
        dependentAxis
        tickFormat={(salary) => (`$${salary / 1000}k`)}
      />
      <V.VictoryAxis />
      <V.VictoryBar
        labels={(d) => `$${d.y}`}
        labelComponent={<V.VictoryTooltip
                          dy={-10}
                          pointerLength={0}
                          style={{fontFamily: 'Source Sans Pro',
                        backgroundColor: '#eee'}}
                        />}
        style={{
          data: {fill: (d) => COLORS[d.x]}
        }}
        data={Util.avgSalaries(data)}
        x="dept"
        y="salary"
      />
    </V.VictoryChart>
  </div>
)

export default Salaries

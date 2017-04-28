import React from 'react'
import * as V from 'victory'
import COLORS from '../../assets/colors.js'

const Salary = (d) => {
  const salaries = d.map(em => em.salary)
  const salaryCount = salaries.length
  const totalSalary = salaries.reduce((a, s) => a + s)
  return Math.round(totalSalary / salaryCount * 100) / 100
}

const Salaries = ({ data }) => {
  const avgSalaries = Object.values(data).map(datum => (
    {dept: datum.dept, salary: Salary(datum.employees)}
  ))

  return (
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
          data={avgSalaries}
          x="dept"
          y="salary"
        />
      </V.VictoryChart>
    </div>
  )
}

export default Salaries

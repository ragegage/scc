import React from 'react'
import * as V from 'victory'

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

  return (<div className="salary">
    Average salaries by dept
    <V.VictoryChart domainPadding={20}>
      <V.VictoryAxis
        dependentAxis
        tickFormat={(salary) => (`$${salary / 1000}k`)}
      />
      <V.VictoryAxis />
      <V.VictoryBar
        data={avgSalaries}
        x="dept"
        y="salary"
        style={{data: {fill: "#41A081"}}}
        />
    </V.VictoryChart>
  </div>)
}

export default Salaries

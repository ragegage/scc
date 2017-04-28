import React from 'react'
import * as V from 'victory'

const Salary = (d) => {
  const salaries = d.map(em => em.salary)
  const salaryCount = salaries.length
  const totalSalary = salaries.reduce((a, s) => a + s)
  return Math.round(totalSalary / salaryCount * 100) / 100
}

const Salaries = ({ data }) => {
  const avgSalaries = Object.keys(data).map(dept => ({dept, salary: Salary(data[dept])}))
  const totalSalary = {cost: 0, count: 0}
  avgSalaries.forEach(avg => {
    totalSalary.cost += avg.salary * data[avg.dept].length
    totalSalary.count += data[avg.dept].length
  })
  const totalAvgSalary = Math.round(totalSalary.cost / totalSalary.count * 100) / 100
  avgSalaries.unshift({dept: "Total", salary: totalAvgSalary})

  console.log(avgSalaries);

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

import { render } from 'react-dom'
import React from 'react'
import data from './data/'

const Salary = (d) => {
  const salaries = d.map(em => em.salary)
  const salaryCount = salaries.length
  const totalSalary = salaries.reduce((a, s) => a + s)
  return totalSalary / salaryCount
}

const employeeChart = (d) => {
  
}

const App = () => (
  <div className="react-app">
    react working
    <div className="salary">
      avg salary: ${Salary(data)}
    </div>
    <div className="chart">
      # employees vs. time
    </div>
    filter for ^ (pick one department)
  </div>
)

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.getElementById("app"))
})

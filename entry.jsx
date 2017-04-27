import { render } from 'react-dom'
import React from 'react'
import data from './data/'
import Salaries from './features/salary/'
import * as V from 'victory'

const employeeChart = (d) => {
  return d.map(em => em.date).sort().map((date, count) => ({x: Date.parse(date) / (3.1536*Math.pow(10,10)) + 1970, y: count + 1}))
}

const App = () => (
  <div className="react-app">
    react working
    <Salaries data={data} />
    <div className="chart">
      # employees vs. time
      <V.VictoryArea data={employeeChart(data)} />
    </div>
    filter for ^ (pick one department)
  </div>
)

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.getElementById("app"))
})

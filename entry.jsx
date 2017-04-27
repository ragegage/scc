import { render } from 'react-dom'
import React from 'react'
import data from './data/'
import Salaries from './features/salary/'
import * as V from 'victory'

const employeeChart = (d) => {
  return d.map(em => em.date).sort().map((date, count) => ({x: Date.parse(date) / (3.1536*Math.pow(10,10)) + 1970, y: count + 1}))
  // d.map(em => em.date.split("-").map(string => parseInt(string)))
  // const sorted = d.sort((emA, emB) => emA.date - emB.date)

  debugger
  return sorted
}

const d2 = [
  {x: 1, y: 0},
  {x: 2, y: 1},
  {x: 3, y: 4},
  {x: 4, y: 4},
  {x: 5, y: 9},
  {x: 6, y: 16},
]

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

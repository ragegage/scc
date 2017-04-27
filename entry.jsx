import { render } from 'react-dom'
import React from 'react'
import data from './data/'
import Salaries from './features/salary/'

const employeeChart = (d) => {

}

const App = () => (
  <div className="react-app">
    react working
    <Salaries data={data} />
    <div className="chart">
      # employees vs. time
    </div>
    filter for ^ (pick one department)
  </div>
)

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.getElementById("app"))
})

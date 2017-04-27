import { render } from 'react-dom'
import React from 'react'
import data from './data/'
import Salaries from './features/salary/'
import Employees from './features/employees/'

const App = () => (
  <div className="react-app">
    react working
    <Salaries data={data} />
    <Employees data={data} />
    filter for ^ (pick one department)
  </div>
)

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.getElementById("app"))
})

import { render } from 'react-dom'
import React from 'react'
import data from './data/'
import Salaries from './features/salary/'
import Employees from './features/employees/'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {selected: "Total"}
    this.depts = ["Total", ...new Set(data.map(em => em.dept))]
    this.dataByDept = App.byDept(data)
  }

  changeDept(name) {
    return (e) => {
      e.preventDefault()
      this.setState({selected: name})
    }
  }

  static byDept(data) {
    const deptsLists = {Total: {dept: "Total", employees: []}}
    data.forEach(em => {
      if (!deptsLists[em.dept])
        deptsLists[em.dept] = {dept: em.dept, employees: []}
      deptsLists[em.dept].employees.push(em)
      deptsLists["Total"].employees.push(em)
    })
    return deptsLists
  }

  filter(data) {
    return data[this.state.selected]
  }

  render() {
    return (
      <div className="react-app">
        <h1>Average salaries by dept</h1>
        <Salaries data={this.dataByDept} />
        <h1># Employees over time</h1>
        <div className="buttons">
          {this.depts.map(dept => (
            <button
              className={this.state.selected === dept ? "selected" : ""}
              onClick={this.changeDept(dept)}
              >{dept}</button>
          ))}
        </div>
        <Employees data={this.filter(this.dataByDept)} />
      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.getElementById("app"))
})

// yellow: EEC431
// blue: 2B94EE
// purple: 9852EB
// orange: E78C2F

import { render } from 'react-dom'
import React from 'react'
import data from './data/'
import Salaries from './features/salary/'
import Employees from './features/employees/'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {selected: undefined}
    this.depts = [...new Set(data.map(em => em.dept))]
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
    if(this.state.selected)
      return data[this.state.selected]
    return data.Total
  }

  render() {
    return (
      <div className="react-app">
        react working
        <Salaries data={this.dataByDept} />
        <Employees data={this.filter(this.dataByDept)} />
        <div className="buttons">
          <button onClick={this.changeDept()}>All</button>
          {this.depts.map(dept => (
            <button onClick={this.changeDept(dept)}>{dept}</button>
          ))}
        </div>
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

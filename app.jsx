import React from 'react'
import data from './data/'
import Salaries from './features/salary/'
import Employees from './features/employees/'
import * as Util from './assets/util.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {selected: "Total"}
    this.depts = ["Total", ...new Set(data.map(em => em.dept))]
    this.dataByDept = Util.byDept(data)
  }

  changeDept(name) {
    return (e) => {
      e.preventDefault()
      this.setState({selected: name})
    }
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

export default App

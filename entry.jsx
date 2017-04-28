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
  }

  changeDept(name) {
    return (e) => {
      e.preventDefault()
      this.setState({selected: name})
    }
  }

  static byDept(data) {
    const deptsLists = {}
    data.forEach(em => {
      if (!deptsLists[em.dept])
        deptsLists[em.dept] = []
      deptsLists[em.dept].push(em)
    })
    return deptsLists
  }

  filter(data) {
    if(this.state.selected)
      return {[this.state.selected]: data[this.state.selected]}
    return data
  }

  render() {
    const dataByDept = App.byDept(data)
    console.log(dataByDept);
    return (
      <div className="react-app">
        react working
        <Salaries data={dataByDept} />
        <Employees data={this.filter(dataByDept)} />
        {this.depts.map(dept => (
          <button onClick={this.changeDept(dept)}>{dept}</button>
        ))}
        <button onClick={this.changeDept()}>All</button>
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

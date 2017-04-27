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
  
  render() {
    console.log(this.depts)
    console.log(this.state.selected)
    return (
      <div className="react-app">
        react working
        <Salaries data={data} />
        <Employees data={data} />
        {this.depts.map(dept => (
          <button onClick={this.changeDept(dept)}>{dept}</button>
        ))}
      </div>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.getElementById("app"))
})

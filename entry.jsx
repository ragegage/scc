import { render } from 'react-dom'
import React from 'react'

const App = () => (
  <div className="react-app">
    react working
  </div>
)

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.getElementById("app"))
})
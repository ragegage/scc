import { render } from 'react-dom'
import React from 'react'
import App from './app'

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.getElementById("app"))
})

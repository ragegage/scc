import { render } from ReactDOM

const App = () => (
  <div className="react-app">
    react working
  </div>
)

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.getElementById("app"))
})
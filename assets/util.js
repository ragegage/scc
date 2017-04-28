// returns employees grouped by dept
// ex: { Sales: { dept: "Sales", employees: [{}, {}] } }
export const byDept = (data) => {
  const deptsLists = {Total: {dept: "Total", employees: []}}
  data.forEach(em => {
    if (!deptsLists[em.dept])
      deptsLists[em.dept] = {dept: em.dept, employees: []}
    deptsLists[em.dept].employees.push(em)
    deptsLists["Total"].employees.push(em)
  })
  return deptsLists
}

const avgSalary = (employeeList) => {
  const salaries = employeeList.map(em => em.salary)
  const salaryCount = salaries.length
  const totalSalary = salaries.reduce((a, s) => a + s)
  return Math.round(totalSalary / salaryCount * 100) / 100
}

// returns the average salaries for each dept
// requires the object to be structured like byDept's return value
export const avgSalaries = (employeeList) => (
  Object.values(employeeList).map(datum => (
    {dept: datum.dept, salary: avgSalary(datum.employees)}
  ))
)

const toYear = (date) => (
  Date.parse(date) / (3.1536 * Math.pow(10, 10)) + 1970
)

// returns employees ordered by date
// accepts a list of employees as input
export const employeesByDate = (d) => {
  return d.map(em => em.date)
          .sort()
          .map((date, count) => ({
            date: toYear(date),
            employeeCount: count + 1
          }))
          .concat({date: 2018, employeeCount: d.length})
        // ^ hack to make them all end at the same point in time (2018)
}

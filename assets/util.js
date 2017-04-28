const avgSalary = (employeeList) => {
  const salaries = employeeList.map(em => em.salary)
  const salaryCount = salaries.length
  const totalSalary = salaries.reduce((a, s) => a + s)
  return Math.round(totalSalary / salaryCount * 100) / 100
}

export const avgSalaries = (employeeList) => (
  Object.values(employeeList).map(datum => (
    {dept: datum.dept, salary: avgSalary(datum.employees)}
  ))
)

const toYear = (date) => (
  Date.parse(date) / (3.1536 * Math.pow(10, 10)) + 1970
)

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

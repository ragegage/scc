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

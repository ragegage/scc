import React from 'react'

const Salary = (d) => {
  const salaries = d.map(em => em.salary)
  const salaryCount = salaries.length
  const totalSalary = salaries.reduce((a, s) => a + s)
  return totalSalary / salaryCount
}

const SalaryByDept = (d) => {
  // makes array of unique depts by putting them into a Set
  // const depts = [...new Set(d.map(em => em.dept))]
  const deptsLists = {}
  d.forEach(em => {
    if (!deptsLists[em.dept])
      deptsLists[em.dept] = []
    deptsLists[em.dept].push(em)
  })
  const deptsSalaries = {}
  Object.keys(deptsLists).forEach(k => deptsSalaries[k] = Salary(deptsLists[k]))
  return deptsSalaries
}

const Salaries = ({ data }) => {
  const total = Salary(data)
  const byDept = SalaryByDept(data)

  return (<div className="salary">
    Total avg salary: ${total}
    {Object.keys(byDept).map(dept => (
      <div key={dept}>{dept}: {byDept[dept]}</div>
    ))}
  </div>)
}

export default Salaries

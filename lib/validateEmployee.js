module.exports = (list, firstName, lastName, age) => {
  const employee = list.find(employee => employee.firstName === firstName && employee.lastName === lastName && employee.age === age)
  return employee ? true : false
}
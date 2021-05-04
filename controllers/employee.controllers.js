let employeesData = require("../data/employees.data")
const Employee = require("../models/employee.model")

const validateEmployee = require('../lib/validateEmployee')

const getAll = (req, res) => res.status(200).json(employeesData)

const create = ({ body: { firstName, lastName, age } }, res) => {
  try {
    const list = employeesData.employees
    const isExisting = validateEmployee(list, firstName, lastName, age)
    if (isExisting) return res.status(400).json({ message: 'Employee data already exist' })
    const employeeId = `E${(list.length + 1).toString().padStart(5, 0)}`
    const joinDate = new Date().toDateString()
    const employee = new Employee(employeeId, firstName, lastName, age, joinDate)
    employeesData.employees = [employee, ...list]
    return res.status(201).json({ message: `New employee id- ${employee.employeeId} created successfully.` })
  } catch (error) {
    next(error)
  }
}

const employeeById = (req, res, next, id) => {
  try {
    const list = employeesData.employees
    const employee = list.find(({ employeeId }) => employeeId === id)
    if (!employee) return res.status(400).send({ message: "Employee data does not exist." })
    req.profile = employee
    next()
  } catch (error) {
    next(error)
  }
}

const read = ({ profile }, res) => res.status(200).json(profile)

const update = ({ body, profile }, res) => {
  try {
    const list = employeesData.employees
    const newData = { ...profile, ...body }
    const isExisting = validateEmployee(list, newData.firstName, newData.lastName, newData.age)
    console.log((isExisting))
    if (isExisting) return res.status(400).json({ message: "Data already exist." })
    const newList = list.filter(({ employeeId }) => employeeId !== body.employeeId)
    employeesData.employees = [newData, ...newList]
    return res.status(200).json({ message: `Employee with id- ${body.employeeId} updated successfully.` })
  } catch (error) {
    next(error)
  }
}

const remove = ({ profile }, res) => {
  try {
    const list = employeesData.employees
    const newList = list.filter(({ employeeId }) => employeeId !== profile.employeeId)
    employeesData.employees = [...newList]
    return res.status(200).json({ message:`Employee with id- ${profile.employeeId} removed successfully.` })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAll,
  create,
  read,
  update,
  remove,
  employeeById
}

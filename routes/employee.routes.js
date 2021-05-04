const { Router } = require('express')
const { getAll, create, read, update, remove, employeeById } = require('../controllers/employee.controllers')

const router = Router()

router.route('/api/employees')
  .get(getAll)
  .post(create)

router.route('/api/employees/:employeeId')
  .get(read)
  .put(update)
  .delete(remove)

router.param('employeeId', employeeById)

module.exports = router

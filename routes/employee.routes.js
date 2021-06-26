const { Router } = require('express')
const apicache = require('apicache').options({
  headers: {
    'cache-control': 'no-cache',
  },
}).middleware

const { getAll, create, read, update, remove, employeeById } = require('../controllers/employee.controllers')

const router = Router()

router.route('/api/employees')
  .get(apicache("30 seconds"), getAll)
  .post(create)

router.route('/api/employees/:employeeId')
  .get(apicache("30 seconds"), read)
  .put(update)
  .delete(remove)

router.param('employeeId', employeeById)

module.exports = router

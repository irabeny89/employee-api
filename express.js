const express = require('express')
const cors = require('cors')
const compression = require('compression')
const morgan = require('morgan')
const helmet = require('helmet')

const employeeRoutes = require('./routes/employee.routes')

const app = express()
app.use(morgan('dev'))
app.use(compression())
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', employeeRoutes)

app.use((err, req, res, next) => {
  if (err) return res.status(400).json(err)
})

module.exports = app
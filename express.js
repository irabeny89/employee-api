const express = require('express')
const cors = require('cors')
const compression = require('compression')
const morgan = require('morgan')
const helmet = require('helmet')

const employeeRoutes = require('./routes/employee.routes')
const template = require('./template')

const app = express()
app.use(morgan('dev'))
app.use(compression())
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_req, res) => res.status(200).send(template()))
app.use('/', employeeRoutes)

app.use((err, _req, res, _next) => {
  if (err) return res.status(400).json(err)
})

module.exports = app
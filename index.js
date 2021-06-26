require('dotenv').config()
const app = require('./express')
const { port, host } = require('./config')

app.listen(port, () => console.log("server up: %s", host))
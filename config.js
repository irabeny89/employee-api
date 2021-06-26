require('dotenv').config()

const env = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 3000
const hostname = "http://localhost"
const remotehost = process.env.REMOTE_HOST
const localhost = `${hostname}:${port}`

const getHost = env => env == "development" ? localhost : remotehost

module.exports = { port, host: getHost(env) }
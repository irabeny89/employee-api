const { host } = require('../config')

module.exports = () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HOME | Employee API</title>
</head>
<body>
  <h1>Welcome to Employee API Home Route</h1><hr />
  <h2><u>API Routes / Endpoints</u></h2>
  <p>An API for Employee management with CRUD functions</p>
  <h3><u>All Employees</u></h3>
  <ul>
    <li>
      <code>GET ${host}/api/employees</code>
    </li>
  </ul>
  <h3><u>Create an Employee</u></h3>
  <ul>
    <li>
      <code>
        <pre>
          POST ${host}/api/employees
          Content-Type: application/json

          {
            "firstName": "{{firstName}}",
            "lastName": "{{lastName}}",
            "age": "{{age}}"
          }
        </pre>
      </code>
    </li>
  </ul>
  <h3><u>Read Employee Data</u></h3>
  <ul>
    <li>
      <code>GET ${host}/api/employees/:employeeId</code>
    </li>
  </ul>
  <h3><u>Update Employee Data</u></h3>
  <ul>
    <li>
      <code>
        <pre>
          PUT ${host}/api/employees/:employeeId
          Content-Type: application/json
          
          {
            "employeeId": "{{id1}}",
            "firstName": "{{newFirstName}}",
            "lastName": "{{newLastName}}"
          }
        </pre>
      </code>
    </li>
  </ul>
  <h3><u>Delete an Employee Data</u></h3>
  <ul>
    <li>
      <code>DELETE ${host}/api/employees/:employeeId</code>
    </li>
  </ul>
</body>
</html>`
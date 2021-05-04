# Employee API CRUD

An API with CRUD operations for listing employees on a temporary data structure in system memory. The application is flexible and other data persistence methods can be used.

### [Live Demo](http://crudapi-employee.herokuapp.com/api/employees/ "Employee CRUD API")

####
Live demo for when the api will be linked with a database.
### [GitHub Repository](https://github.com/irabeny89/employee-api.git)

### What you need to run this code
1.  Node (^15.0.0)
2.  NPM (^7.0.0)
3.  REST Client extension or PostMan or Curl any API testing application

### How to run this code
1.  clone this repository 
2.  Open command line in the cloned folder,
  - To install dependencies, run ```  npm install  ``` or ``` yarn ```
  - To run the application for development, run ```  nodemon  ```
3. Open [localhost:3000](http://localhost:3000/) in the browser, Curl, REST Client, PostMan etc
---- 

### Endpoints
#### Get all employees
GET http://localhost:3000/api/employees

#### Creating an employee
POST http://localhost:3000/api/employees
Content-Type: application/json

{
  "firstName": "{{firstName}}",
  "lastName": "{{lastName}}",
  "age": "{{age}}"
}
#### Read employee data
GET http://localhost:3000/api/employees/:employeeId

#### Update employee data
PUT http://localhost:3000/api/employees/:employeeId
Content-Type: application/json

{
  "employeeId": "{{id1}}",
  "firstName": "{{newFirstName}}",
  "lastName": "{{newLastName}}"
}

#### Delete employee data
DELETE http://localhost:3000/api/employees/:employeeId
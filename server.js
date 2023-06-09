//Packages for application
const inquirer = require("inquirer");
const prompt = require("prompt");
//const express = require ('express')
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;

//const app = express();

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Backroadboy94!",
  database: "staffing_db",
});

db.connect((err) => {
  if (err) {
    console.error("Error with connection to database: ", err);
    return;
  }
  console.log("Connected to staffing_db database");
  // app.listen(PORT, () => {
  //   console.log('Server is running on port ${PORT}');
  // });
  run();
});

//main prompt ques for user
function run() {
  inquirer
    .prompt([{
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'Add a department',
        'View all roles',
        'Add a role',
        'View all employees',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    },
    ])
    .then((result) => {
      const action = result.action;
      
      if (action === 'View all departments'){
        viewDepartments();
      } else if (action === 'Add a department'){
        addDepartment();
      } else if (action === 'View all roles'){
          viewDepartments();
      } else if (action === 'Add a role'){
        addRole();
      } else if (action === 'View all employees'){
        viewEmplooyees();
      } else if (action === 'Add an employee'){
        addEmployee();
      } else if (action === 'Update an employee role') {
        updateEmployeeRole();
      } else if (action === 'Exit') {
        db.end();
        return;
      }
    })
    .catch((error)=> {
      console.log('Error:', error);
    });
}

function viewDepartments() {
  inquirer
    .prompt([{
      name: 'departmentName',
      message: 'List of Departments',
      type: "list",
      choices: departments
    },])
    .then((result) => {
      const departmentName = result.departmentName;
      console.log("Department Name:", departmentName);
      const values = [departmentName];
      db.query("select * from departments", (err, data) => {
        console.log(data)
        if (err) {
          console.error(
            "Error, could not view department from staffing_db database", err);
          return;
        }
        console.log("Department viewed from staffin_db database");
        run();
        //connection.end();
      });
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
//Prompt to add department
function addDepartment() {
  inquirer
    .prompt([{
      name: 'departmentName',
      message: 'What is the name of the department?'
    },])
    .then((result) => {
      const departmentName = result.departmentName;
      console.log("Department Name:", departmentName);
      const sql = "INSERT INTO departments (name) VALUES (?)";
      const values = [departmentName];

      db.query(sql, values, (err, results) => {
        console.log(results);
        if (err) {
          console.error(
            "Error, could not insert department into staffing_db database", err);
          return;
        }
        console.log("Department added to database");
        run();
        //connection.end();
      });
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

//Prompt to add role
function addRole() {
  db.query("select * from departments", (err, data) => {
    console.log(data)
    const departments = data.map(({ id, name }) => ({
      name: name,
      value: id
    }));
    inquirer
    .prompt([{
      name: 'title',
      message: 'What is the name of the role?'
    },
    {
      name: 'roleSalary',
      message: 'Enter salary for the role:',
    },
    {
      name: 'roleDepartment',
      message: 'Enter the department of the role',
      type: "list",
      choices: departments
    }
  ])
    .then((result) => {
      const title = result.title;
      console.log("Role Name:", title);
      const roleSalary = result.roleSalary;
      console.log("Role Salary:", roleSalary);
      const roleDepartment = result.roleDepartment;
      console.log("Role Department:", roleDepartment)

      const sql = "INSERT INTO roles (title, salary, departments_id) VALUES (?, ?, ?)";
      const values = [title, roleSalary, roleDepartment];

      db.query(sql, values, (err, results) => {
        console.log(results);
        if (err) {
          console.error(
            "Error, could not insert role into staffing_db database",err);
          return;
        }
        console.log("role added to database");
        //connection.end();
        run();
      });
    })
    .catch((error) => {
      console.log("Error:", error);
    })
  })
  
};
function addEmployee() {
  db.query("select * from roles", (err, data) => {
    const roles = data.map(({ id, title }) => ({
      name: title,
      value: id
    }));
    db.query("select * from employees", (err, data) => {
      const employees = data.map(({ id, first_name }) => ({
        name: first_name,
        value: id
      }));
      inquirer
      .prompt([{
        name: 'employeeFirstName',
        message: 'What is the first name of the employee?'
      },
      {
        name: 'employeeLastName',
        message: 'What is the last name of the employee?'
      },
      {
        name: 'employeeRole',
        message: 'What is the employees role?',
        type: "list",
        choices: roles
      },
      {
        name: 'employeeManager',
        message: 'What is the employees manager?',
        type: "list",
        choices: employees

      },])
      .then((result) => {
        const employeeFirstName = result.employeeFirstName;
        console.log("Employee's First Name:", employeeFirstName);
        const employeeLastName = result.employeeLastName;
        console.log("Employee's Last Name:", employeeLastName);
        const employeeRole = result.employeeRole;
        console.log("Employee's Role:", employeeRole)
        const employeeManager = ("Employee's Manager:", result.employeeManager)
        console.log("Employee's Manager:", result.employeeManager)
        
        //Inserting employee info entered from prompt into database
        const sql = "INSERT INTO employees (first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?)";
  
        db.query(sql,[employeeFirstName, employeeLastName, employeeRole, employeeManager], (err, results) => {
          console.log(results);
          if (err) {
            console.error("Error, could not insert employee into staffing_db database", err);
            return;
          }
          console.log("Employee added to database");
          //connection.end();
          run();
          }
        );
      })
      .catch((error) => {
        console.log("Error:", error);
      })
    })
  });
  
  };
 
  let employees; // Declare employees variable outside the callback function

    function updateEmployeeRole() {
      db.query("select * from employees", (err, data) => {
         employees = data.map(({ id, first_name }) => ({
          name: first_name,
          value: id,
    }));
        inquirer
        .prompt([{
          name: 'updateEmployeeRole',
          message: 'Select Employee to have their role updated',
          type: "list",
          choices: employees,
        },{
          name: 'newRole',
          message: 'Enter the new role of the employee',
        },])
        .then((result) => {
          const updateEmployeeRole = result.updateEmployeeRole;
          console.log("Employee that will have updated role:", updateEmployeeRole);
          const newRole = result.newRole;
          
          //Update of employee's role in db
          const sql = "UPDATE employees SET roles_id = ? WHERE id = ?";
          const values = [updateEmployeeRole];
          const employeeToUpdate = result.updateEmployeeRole;
    
          db.query(sql, [newRole, employeeToUpdate], (err, results) => {
            console.log(results);
            if (err) {
              console.error(
                "Error, could not insert updated employee role into staffing_db database",
                err
              );
              return;
            }
    
          console.log("Employee's updated role added to database");
            //connection.end();
            run();
          });
        })
        .catch((error) => {
          console.log("Error:", error);
        });
      });
    }


//Packages for application
const inquirer = require ('inquirer')
const express = require('express')
const mysql = require('mysql2')
const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Backroadboy94!',
    database: 'staffing_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error with connection to database: ', err);
    return;
  }
    console.log('Connected to staffing_db database');
    app.listen(PORT, () => {
      console.log('Server is running on port ${PORT}');
    });
})

function run(){
inquirer
prompt.start()
prompt.get(['departmentName'], (err, result) => {
  if (err) {
    console.log('Database connection error', err);
    return;
  }
  console.log('Connected to the database')
});

const departmentName = result.departmentName;

const sql ='INSERT INTO departments (name) VALUES (?)';
const values = [departmentName];

connection.query(sql, values, (err,results) => {
  if (err) {
    console.error('Error, could not insert department into staffing_db database', err);
    return;
  }

console.log('Department added to database');
connection.end();
});
}
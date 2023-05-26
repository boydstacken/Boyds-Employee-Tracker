DROP DATABASE IF EXISTS staffing_db;

-- creates the "staffing_db" database --
CREATE DATABASE staffing_db;

-- all of the following code will afffect staffing_db --
USE staffing_db;

-- Will create the "employees" table in the database we created --
CREATE TABLE departments (
 id INT NOT NULL,
 name VARCHAR(30) NOT NULL
);
CREATE TABLE employees (
 id INT NOT NULL,
 first_name VARCHAR(30) NOT NULL,
 last_name VARCHAR(30) NOT NULL,
 role_id INT NOT NULL,
 manager_id INT NOT NULL
);
CREATE TABLE roles (
 id INT NOT NULL,
 title VARCHAR(30) NOT NULL,
 salary DECIMAL NOT NULL,
 department_id INT NOT NULL
);
DROP DATABASE IF EXISTS staffing_db;

-- creates the "staffing_db" database --
CREATE DATABASE staffing_db;

-- all of the following code will afffect staffing_db --
USE staffing_db;

-- Will create the "employees" table in the database we created --
CREATE TABLE departments (
 id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(30) NOT NULL,
 PRIMARY KEY (id)
);
CREATE TABLE roles (
 id INT NOT NULL AUTO_INCREMENT,
 PRIMARY KEY (id),
 title VARCHAR(30) NOT NULL,
 salary DECIMAL NOT NULL,
 departments_id INT NOT NULL,
 FOREIGN KEY (departments_id)
 REFERENCES departments(id) 
 ON DELETE CASCADE
);
CREATE TABLE employees (
 id INT NOT NULL AUTO_INCREMENT,
 PRIMARY KEY (id),
 first_name VARCHAR(30) NOT NULL,
 last_name VARCHAR(30) NOT NULL,
 roles_id INT NOT NULL,
 manager_id INT,
 FOREIGN KEY (roles_id) REFERENCES roles(id),
 FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
); 
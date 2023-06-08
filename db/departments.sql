CREATE TABLE departments (
 id INT NOT NULL,
 name VARCHAR(30) NOT NULL
);

INSERT INTO departments (id, name)
VALUES 
    (1, "Department Names"),
    (2, "Department IDs");

SELECT * FROM departments;